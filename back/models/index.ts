import User from './user';
export * from './sequelize';//sequelize.ts에선 설정을 하고 index.ts엔 import를 한다. 
// 그 이유는? index 에서는 import함과 동시에 exprot를 한다. 