import { Serializer as АбвSerializer } from
  '../mixins/regenerated/serializers/i-i-s-privet-абв';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АбвSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
