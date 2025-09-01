import { Mutation,  Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor (private readonly userService: UsersService) {}

  @Mutation(() => String)
  public async signup(): Promise<string>{
    console.log("Mutation sign up ");
    return this.userService.signup();
  }

  @Mutation(() => String)
  public async login(): Promise<string>{
    console.log("Mutation: Login ");
    return this.userService.login();
  }

  @Query(() => String)
  public async getUser(): Promise<string>{
    console.log("gerUser API executed");
    return this.userService.getUser();
  }
}
