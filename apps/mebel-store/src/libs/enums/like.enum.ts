import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	USER = 'USER',
	PROPERTY = 'PROPERTY',
	ARTICLE = 'ARTICLE',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
