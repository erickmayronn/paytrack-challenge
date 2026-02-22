import axios, { AxiosInstance } from 'axios';

export class BaseService {
  protected api: AxiosInstance;

  constructor(baseURL: string, headersObject?: Record<string, string>) {
    this.api = axios.create({
      baseURL,
      timeout: 8000,
      headers: {
        'Content-Type': 'application/json',
        ...headersObject,
      },
    });
  }

  protected async get<T>(url: string): Promise<T> {
    const { data } = await this.api.get<T>(url);
    return data;
  }

  protected async post<T>(url: string, body: unknown): Promise<T> {
    const { data } = await this.api.post<T>(url, body);
    return data;
  }

  protected async put<T>(url: string, body: unknown): Promise<T> {
    const { data } = await this.api.put<T>(url, body);
    return data;
  }

  protected async delete<T>(url: string): Promise<T> {
    const { data } = await this.api.delete<T>(url);
    return data;
  }
}
