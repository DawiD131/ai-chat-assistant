import type { ApiRepository } from "~/features/chatAssistant/repository/repositoryInitializer";

export class ApiRepositoryProvider {
  private static instance: ApiRepository | null = null;

  public static provide(instance: ApiRepository) {
    ApiRepositoryProvider.instance = instance;
  }

  public static inject(): ApiRepository {
    if (!ApiRepositoryProvider.instance)
      throw new Error("api repository instance is not defined");
    return ApiRepositoryProvider.instance;
  }
}
