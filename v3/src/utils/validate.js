/**
 * 过滤掉用户输入的特殊字符
 * @param {String} input   
 * @returns {String}
 */
export function filterUserInput(input) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{} 【】‘；：”“'。，、？]");
    var rs = "";
    for (var i = 0; i < input.length; i++) {
        rs = rs + input.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

/**
 * 验证字符串是否为邮箱
 * @param {String} email
 * @returns {Boolean}
 */
export function isEmail(email) {
    var reg_email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg_email.test(email);
}
/**
 * 验证密码是否符合规范：密码为6至20位的数字加字母。
 * @param {String} password 
 * @returns {Boolean}
 */
export function checkPassword(password) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return reg.test(password);
}
/**
 * 验证码是否合格：必须为6位数字或字母
 * @param {String} code 
 * @return {Boolean}
 */
export function checkCode(code) {
    let reg = /^[a-z0-9]{6}$/;
    return reg.test(code);
}



/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validUsername (str) {
  const validmap = ['admin', 'editor']
  return validmap.indexOf(str.trim()) >= 0
}