export default abstract class FileParser<T> {
    abstract parse(json: any): T;
    parseArray(json: any): Array<T> {
        if(!Array.isArray(json))
            throw new Error('Unable to parse! Is not Array!');

        return json.map(el => this.parse(el));
    }
}