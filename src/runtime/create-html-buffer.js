/**
 * @file 创建字符串连接对象，用于跨平台提高性能的字符串连接，万一不小心支持老式浏览器了呢
 * @author errorrik(errorrik@gmail.com)
 */

var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 创建字符串连接对象
 *
 * @return {Object}
 */
function createHTMLBuffer() {
    return {
        raw: ieOldThan9 ? [] : '',
        length: 0,
        tagStart: 1,
        insertComments: []
    };
}

exports = module.exports = createHTMLBuffer;
