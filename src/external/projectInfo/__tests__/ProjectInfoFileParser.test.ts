import CardInfoFileParser from "../ProjectInfoFileParser";

describe('should validate card info', () => {
    const getTesting = () => new CardInfoFileParser();
    it('Should return parsed object', () => {
        const jsonTxt = `{
            "projectDescription": "description",
            "projectTitle":"title",
            "projectIconUrl":"icon.svg",
            "relatedLinks": [{
                "label": "string",
                "link": "string"
            }],
            "tags": ["tag1"]
        }`;
        const result = getTesting().parse(JSON.parse(jsonTxt));
        expect(result.projectDescription).toBe("description");
        expect(result.projectTitle).toBe("title");
        expect(result.projectIconUrl).toBe("icon.svg");
        expect(result.relatedLinks?.length).toBe(1);
        expect(result.tags?.length).toBe(1);
    });
    it('Should return parsed object with undefined optional fields', () => {
        const jsonTxt = `{
            "projectDescription": "description",
            "projectTitle":"title",
            "projectIconUrl":"icon.svg"
        }`;
        const result = getTesting().parse(JSON.parse(jsonTxt));
        expect(result.projectDescription).toBe("description");
        expect(result.projectTitle).toBe("title");
        expect(result.projectIconUrl).toBe("icon.svg");
        expect(result.relatedLinks).toBeUndefined()
        expect(result.tags).toBeUndefined()
    });
    it('Should should throw error when parsed object has undefined mandatory field', () => {
        const jsonTxt = `{
            "projectDescription": "description",
            "projectIconUrl":"icon.svg"
        }`;
        const obj = JSON.parse(jsonTxt);
        expect(() => getTesting().parse(obj)).toThrow('Unable to parse, undefinded field');
    });
    it('Should return parsed array', () => {
        const jsonTxt = `[{
            "projectDescription": "description",
            "projectTitle":"title",
            "projectIconUrl":"icon.svg",
            "relatedLinks": [{
                "label": "string",
                "link": "string"
            }],
            "tags": ["tag1"]
        }]`;
        const arr = getTesting().parseArray(JSON.parse(jsonTxt));
        const result = arr[0];
        expect(result.projectDescription).toBe("description");
        expect(result.projectTitle).toBe("title");
        expect(result.projectIconUrl).toBe("icon.svg");
        expect(result.relatedLinks?.length).toBe(1);
        expect(result.tags?.length).toBe(1);
    });
});