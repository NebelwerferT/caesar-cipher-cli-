function replacer(action, shift, match) {
    shift = shift % 26;
    if (action === 'encode' && shift >= 0 || action === 'decode' && shift <= 0) {
        shift = Math.abs(shift);
        if (match.toLowerCase().charCodeAt(0) + shift > 'z'.charCodeAt(0)) {
            shift = shift - 26;
        }
    }
    if (action === 'encode' && shift <= 0 || action === 'decode' && shift >= 0) {
        shift = -Math.abs(shift);
        if (match.toLowerCase().charCodeAt(0) + shift < 'a'.charCodeAt(0)) {
            shift = shift + 26;
        }
    }
    return String.fromCharCode(match.charCodeAt(0) + shift);
}

module.exports.replacer = replacer;