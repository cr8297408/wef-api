const actions = {
	/**
     * permissions for all records in db
     */
	 FIND_ALL: 'FIND_ALL',
	 FIND_ONE: 'FIND_ONE',
	 CREATE: 'CREATE',
	 UPDATE: 'UPDATE',
	 DELETE: 'DELETE',
	 /**
		* permissions for own records in db
		*/
	 FIND_ALL_OWN: 'FIND_ALL_OWN',
	 FIND_ONE_OWN: 'FIND_ONE_OWN',
	 CREATE_OWN: 'CREATE_OWN',
	 UPDATE_OWN: 'UPDATE_OWN',
	 DELETE_OWN: 'DELETE_OWN',
	 /** permissions for admin alter user */
	 ALTER_USER: 'ALTER_USER'
}

module.exports = actions;