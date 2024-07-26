import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './bookmark.model';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@Args('userId', { type: () => Int }) userId: number) {
    return this.bookmarkService.findAll(userId);
  }
}
