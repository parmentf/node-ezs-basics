import pako from 'pako';

let deflator;
function TXTZip(data, feed) {
    if (this.isLast()) {
        deflator.push('', true);
        return;
    }
    if (this.isFirst()) {
        deflator = new pako.Deflate({ level: 9, to: 'string', gzip: true, header: { text: true } });
        deflator.onData = chunk => feed.write(chunk);
        deflator.onEnd = () => feed.close();
    }
    deflator.push(Buffer.from(data, 'binary'), false);
    feed.end();
}

/**
 * Take a String and zip it
 *
 * @name TXTZip
 * @returns {Buffer}
 */
export default {
    TXTZip,
};
