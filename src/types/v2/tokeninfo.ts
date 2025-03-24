import { Schema, SchemaTypes } from './schema';

export type TokenInfo<T extends Schema> = SchemaTypes<TokenInfo.Changes>[T];

export namespace TokenInfo {
  export type Changes = {
    [Schema.V0]: TokenInfo.V0;
    [Schema.V4]: TokenInfo.V1;
  };

  export type V0 = {
    /**
     * The first half of the API key that was requested.
     */
    id: string;

    /**
     * The name given to the API key by the account owner.
     */
    name: string;

    /**
     * The permissions the api key has.
     */
    permissions: string[];
  };

  export type V1 = V0 &
    (
      | {
          type: Type.API_KEY;
        }
      | {
          type: Type.SUBTOKEN;
          expires_at: string;
          issued_at: string;
          urls: string[];
        }
    );

  export enum Type {
    API_KEY = 'APIKey',
    SUBTOKEN = 'Subtoken',
  }
}
