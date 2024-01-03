const {
  userCollection
} = require('../../common/constants')
const {
  ERROR
} = require('../../common/error')
const {
  preRegisterWithPassword,
  postRegister
} = require('../../lib/utils/register')

module.exports = async function (params = {}) {
  const schema = {
    username: 'username',
    password: 'password',
    nickname: {
      type: 'nickname',
      required: false
    }
  }
  this.middleware.validate(params, schema)
  const {
    username,
    password,
    nickname
  } = params
  const getAdminRes = await userCollection.where({
    role: 'admin'
  }).limit(1).get()
  if (getAdminRes.data.length > 0) {
    const [admin] = getAdminRes.data
    const appId = this.getUniversalClientInfo().appId

    if (!admin.dcloud_appid || (admin.dcloud_appid && admin.dcloud_appid.includes(appId))) {
      return {
        errCode: ERROR.ADMIN_EXISTS,
        errMsg: this.t('uni-id-admin-exists')
      }
    } else {
      return {
        errCode: ERROR.ADMIN_EXISTS,
        errMsg: this.t('uni-id-admin-exist-in-other-apps')
      }
    }
  }
  const {
    user,
    extraData
  } = await preRegisterWithPassword.call(this, {
    user: {
      username
    },
    password
  })
  return postRegister.call(this, {
    user,
    extraData: {
      ...extraData,
      nickname,
      role: ['admin']
    }
  })
}
