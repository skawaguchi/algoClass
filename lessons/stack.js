const delimiter = '&^*';

const Stack = function () {
    this.storage = '';
};

Stack.prototype.push = function (value) {
    this.storage = this.storage.concat(delimiter, value);
};

Stack.prototype.pop = function () {
    const lastDelimiterIndex = this.storage.lastIndexOf(delimiter);
    const extractionIndex = lastDelimiterIndex + delimiter.length;

    const extracted = this.storage.slice(extractionIndex);

    this.storage = this.storage.slice(0, lastDelimiterIndex);

    return extracted;
};

Stack.prototype.size = function () {
    const regexp = new RegExp(`[${delimiter}]{${delimiter.length}}`, 'gi');
    const matches = this.storage.match(regexp);

    if (matches) {
        return matches.length;
    }
    return 0;
};

module.exports = Stack;
