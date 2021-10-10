export default class JsonFileFetcher {

    async retrieveJsonFile(filePath: string) {
        const response = await fetch(filePath);
        return await response.json();
    }

}