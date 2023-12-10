#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { UserStack } from '../lib/user-stack';
import { ItemStack } from '../lib/item-stack';
import { ItemtagStack } from '../lib/itemTag-stack';
import { ItemsitemtagsStack } from '../lib/itemsItemTags-stack';
import { ItempreferenceStack } from '../lib/itemPreference-stack';
import { MatchStack } from '../lib/match-stack';
import { ChatStack } from '../lib/chat-stack';
import { MessageStack } from '../lib/message-stack';

const app = new cdk.App();
new UserStack(app, 'UserStack', {});
new ItemStack(app, 'ItemStack', {});
new ItemtagStack(app, 'ItemtagStack', {});
new ItemsitemtagsStack(app, 'ItemsitemtagsStack', {});
new ItempreferenceStack(app, 'ItempreferenceStack', {});
new MatchStack(app, 'MatchStack', {});
new ChatStack(app, 'ChatStack', {});
new MessageStack(app, 'MessageStack', {});
