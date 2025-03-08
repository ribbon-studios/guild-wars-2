> [!IMPORTANT]  
> This repository is currently a WIP and as such isn't finished.

# Guild Wars 2 API

> Access all of the Guild Wars 2 APIs with typescript support!

### Quick Start

```ts
import { GuildWars2 } from '@ribbon-studios/guild-wars-2';

const gw2 = new GuildWars2('2024-07-20T01:00:00.000Z');

export async function example(token: string) {
  await gw2.account({ token });
}
```
