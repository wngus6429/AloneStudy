module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
        {
          subject: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          content: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        },
        {
            charrset: 'utf8',
            collate: 'utf8_general_ci', //한글저장됨
        }
        // 시퀄라이즈가 두가지 더 추가해줌. createdAt, updatedAt
  );
  Post.associate = (db) => {};
  return Post;
};
