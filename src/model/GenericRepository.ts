export default interface GenericRepository<T> {
    getAll(): Array<T>;
}