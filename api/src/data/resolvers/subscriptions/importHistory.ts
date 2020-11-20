import { withFilter } from 'apollo-server-express';
import { graphqlPubsub } from 'erxes-api-utils';

export default {
  /*
   * Listen for import history updates
   */
  importHistoryChanged: {
    subscribe: withFilter(
      () => graphqlPubsub.asyncIterator('importHistoryChanged'),
      // filter by importHistoryId
      (payload, variables) => {
        return payload.importHistoryChanged._id === variables._id;
      }
    )
  }
};
