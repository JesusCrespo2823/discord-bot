const check = (permissions, memberPermissions) => {
	return permissions.every((perm) => memberPermissions.includes(perm))
}

module.exports = check
