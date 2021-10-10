import JsonFileFetcher from "./JsonFileFetcher";
import GenericRepository from "../model/GenericRepository";
import FileParser from "./FileParser";

export interface FileRepositoryParams<T> {
    jsonFilePath: string;
    parser: FileParser<T>;
    fetcher: JsonFileFetcher;
}

export default class FileRepository<T> implements GenericRepository<T> {

    private data?: Array<T>;
    private readonly jsonFilePath: string;
    private readonly parser: FileParser<T>;
    private readonly fetcher: JsonFileFetcher;

    constructor(params: FileRepositoryParams<T>) {
        this.jsonFilePath = params.jsonFilePath;
        this.parser = params.parser;
        this.fetcher = params.fetcher;
    }

    public getAll(): T[] {
        if(this.data)
            return this.data;
        
        throw new Error("Data not loaded");
    }

    public async loadFile() {
        if(this.hasLoaded())
            return;
        
        const any = await this.fetcher.retrieveJsonFile(this.jsonFilePath);
        const parsed = this.parser.parseArray(any);
        this.data = parsed;
    }

    public hasLoaded() {
        return Boolean(this.data);
    }





}