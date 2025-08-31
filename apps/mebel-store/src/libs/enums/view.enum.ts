import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	USER = 'USER',
	ARTICLE = 'ARTICLE',
	PROPERTY = 'PROPERTY',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
