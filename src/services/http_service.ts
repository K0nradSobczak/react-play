import ApiClient from "./api_client";

class FetchClient<Entity>{
  constructor(private URL: string) {};

  public getAll = ()  => {
    return ApiClient
      .get<Entity[]>(this.URL)
      .then((res) => res.data);
  }

  public addEntity = (body: Entity) => {
    return ApiClient
      .post<Entity>(this.URL, body)
      .then(res => res.data);
  }

  public delete = (id: number) => {
    return ApiClient
      .delete(this.URL + `/${id}`)
      .then(res => res.data);
  }

  public patch = (id: number, body: Entity) =>{
    return ApiClient
      .patch<Entity>(this.URL + `/${id}`, {data: body})
      .then(res => res.data);
  }

  public getById =(id: number) => {
    return ApiClient
      .get<Entity>(this.URL + `/${id}`)
      .then(res => res.data)
  }
}

export default FetchClient;