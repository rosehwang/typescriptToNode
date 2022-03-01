//순환참조가 발생하기 때문에 방지하기 위해 세 개의 파일로 나눈 것.
import { 
    Model, DataTypes, BelongsToManyGetAssociationsMixin, 
    HasManyGetAssociationsMixin, BelongsToManyRemoveAssociationMixin,
    BelongsToManyAddAssociationMixin,
} from 'sequelize';
// import { dbType } from './index';
// import Post from './post';
import { sequelize } from './sequelize';

class User extends Model {
    public readonly id!: number;//자동생성
    public nickname!: string;
    public userId!: string;
    public password!: string;
    public readonly createdAt!: Date;//sequelize에서 자체 관리
    public readonly updatedAt!: Date;//sequelize에서 자체 관리
  
    // public readonly Posts?: Post[];
    // public readonly Followers?: User[];
    // public readonly Followings?: User[];
  
    // public addFollowing!: BelongsToManyAddAssociationMixin<User, number>;
    // public getFollowings!: BelongsToManyGetAssociationsMixin<User>;
    // public removeFollowing!: BelongsToManyRemoveAssociationMixin<User, number>;
    // public getFollowers!: BelongsToManyGetAssociationsMixin<User>;
    // public removeFollower!: BelongsToManyRemoveAssociationMixin<User, number>;
    // public getPosts!: HasManyGetAssociationsMixin<Post>;
}

User.init({
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    sequelize,//sequelize.ts 호출 
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });