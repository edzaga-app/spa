import { connect } from '../config/config';

class CrudRepository {
  className = 'CrudRepository';
  
  constructor() { }

  public async executeQuery<T>(sql: string, params: Array<string>): Promise<T[] | any> {
    let res = null;
    let conn;
    try {
      conn = await connect();
      res = await conn.query(sql, params);

    } catch (err) {
      console.error(`Error en ${this.className} => get`, err);
    } finally {
      if (conn) {
        await conn.end();
      }
    }
    return res;
  }


}

export default CrudRepository;


