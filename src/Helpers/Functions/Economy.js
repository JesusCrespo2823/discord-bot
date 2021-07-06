const User = require("../../Models/User")

const registerMember = (member) => {
	if(!member) return

	new User({
		userId: member.id,
		guildId: member.guild.id,
	}).save()
}

const addMoney = async (member, money) => {
	if(!member || !money || isNaN(money)) return

	await User.findOneAndUpdate({
		userId: member.id,
		guildId: member.guild.id
	}, {
		$inc: {
			money
		} 
	}, {
		new: true,
		upsert: true
	})
}

const getMoney = async (member) => {
	if(!member) return

	const money = await User.findOne({
		userId: member.id,
		guildId: member.guild.id
	})

	return money
}

const addMoneyBank = async (member, amount) => {
	if(!member || !amount || isNaN(amount)) return

	await User.findOneAndUpdate({
		userId: member.id,
		guildId: member.guild.id
	}, {
		$inc: {
			moneyBank: amount
		}
	}, {
		new: true,
		upsert: true
	})
}

const removeMoney = async (member, amount) => {
	if(!member || !amount || isNaN(amount)) return

	let money = -amount

	await User.findOneAndUpdate({
		userId: member.id,
		guildId: member.guild.id
	}, {
		$inc: {
			money: money
		}
	}, {
		upsert: true,
		new: true
	})

	return true
}

const removeMoneyBank = async (member, amount) => {
	if(!member || !amount || isNaN(amount)) return

	const money = -amount

	await User.findOneAndUpdate({
		userId: member.id,
		guildId: member.guild.id
	}, {
		$inc: {
			money
		}
	}, {
		new: true,
		upsert: true
	})
}

const resetMemberMoney = async (member) => {
	if(!member) return

	await User.findOneAndUpdate({
		userId: member.id,
		guildId: member.guild.id
	}, {
		money: 0,
		moneyBank: 0
	}, {
		new: true,
		upsert: true
	})
}

const resetGuildMoney = async (guild) => {
	if(!guild) return

	await User.deleteMany({
		guildId: guild.id
	})
}

module.exports = {
	registerMember,
	addMoney,
	removeMoney,
	resetGuildMoney,
	resetMemberMoney,
	getMoney,
	addMoneyBank,
	removeMoneyBank
}
