import { Inject } from '@nestjs/common';
import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddSampleDto } from 'src/dto/sample.dto';
import { SampleModel } from 'src/models/sample.model';
// import { SampleService } from 'src/services/sample.service';

@Resolver(() => SampleModel)
export class SampleResolver {
  //   constructor(@Inject(SampleService) private sampleService: SampleService) {}

  @Query((returns) => SampleModel, { nullable: true })
  async sample(@Args('sub', { type: () => String }) sub: string) {
    let SampleModel;
    if (sub == 'google-oauth2|103738236885130765341') {
      SampleModel = {
        sub: sub,
        id: 1,
        name: '瞬生',
        freeInput: '瞬生で認証できています',
      };
    } else {
      SampleModel = {
        sub: sub,
        id: 2,
        name: 'テストユーザ',
        freeInput: '認証違う人です',
      };
    }
    return SampleModel;
  }
}
