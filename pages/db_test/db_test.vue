<template>
    <view class="style-content style-column">
        <view>注意：操作数据库之前需先打开数据库并创建数据表</view>
        <view class="style-line style-row">
            <view class="style-half style-row">
                <view class="style-one-of-third">姓名：</view>
                <editor id="editor" class="style-two-of-third" placeholder="点击输入" @input="onNameChange"></editor>
            </view>
            <view class="style-half style-row">
                <view class="style-one-of-third">工号：</view>
                <editor class="style-two-of-third" placeholder="点击输入" @input="onIdChange"></editor>
            </view>
        </view>
        <view>操作结果：{{log}}</view>
        <button class="style-line" @click="isOpen">数据库是否已打开</button>
        <button class="style-line" @click="openDatabase">打开数据库</button>
        <button class="style-line" @click="closeDatabase">关闭数据库</button>
        <button class="style-line" @click="createTable">创建数据表</button>
        <button class="style-line" @click="insertOneData">插入一条数据</button>
        <button class="style-line" @click="deleteDataByName">根据姓名删除数据</button>
        <button class="style-line" @click="deleteAllData">删除所有数据</button>
        <button class="style-line" @click="querryTargetData">根据姓名查询数据，刷新数据列表</button>
        <button class="style-line" @click="querryAllData">查询所有数据，刷新数据列表</button>
        <view class="style-line">数据列表</view>
        <uni-list>
            <uni-list-item v-for="(userInfo, index) in userInfos" :title="userInfo.name" :rightText="userInfo.id"
                :key="index">
            </uni-list-item>
        </uni-list>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                userInfos: [],
                //数据库名称，这里我推测应该是要和下面一行数据库路径中的名称保持一致，暂时没验证过不一致会怎样
                databaseName: 'project',
                //数据库路径
                databasePath: '_doc/project.db',
                //数据表名称
                tableName: 'userInfo',
                //用户输入的名字
                inputName: '',
                //用户输入的工号
                inputId: '',
                //操作日志
                log: '请开始操作'
            }
        },
        onLoad() {
            console.log('执行 onLoad');
        },
        methods: {
            onNameChange(e) {
                let input = e.detail.text;
                //不知道为啥，这里编辑框的内容最后总是带有一个换行符'\n'，所以需要将其处理掉
                this.inputName = input.substring(0, input.lastIndexOf("\n"));
                this.log = this.inputName;
            },
            onIdChange(e) {
                let input = e.detail.text;
                this.inputId = input.substring(0, input.lastIndexOf("\n"));
                this.log = this.inputId;
            },
            isOpen() {
                let res = plus.sqlite.isOpenDatabase({
                    name: this.databaseName,
                    path: this.databasePath
                });
                this.log = res ? "数据库已开启" : '数据库已关闭';
                return res;
            },
            openDatabase() {
                plus.sqlite.openDatabase({
                    name: this.databaseName,
                    path: this.databasePath,
                    success: (e) => {
                        this.log = '打开或创建数据库成功';
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '打开或创建数据库失败';
                    }
                });
            },
            closeDatabase() {
                plus.sqlite.closeDatabase({
                    name: this.databaseName,
                    success: (e) => {
                        this.log = '关闭数据库成功';
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '关闭数据库失败';
                    }
                });
            },
            createTable() {
                const createSql = 'create table if not exists ' + this.tableName +
                    '(name VARCHAR(32) PRIMARY KEY NOT NULL,id VARCHAR(32) NOT NULL)';
                console.log(createSql);
                plus.sqlite.executeSql({
                    name: this.databaseName,
                    sql: createSql,
                    success: (e) => {
                        this.log = '创建数据表成功';
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '创建数据表失败';
                    }
                });
            },
            insertOneData() {
                if (!this.inputName || 0 === this.inputName.length) {
                    this.log = '姓名为空，请输入姓名和工号';
                    return;
                }
                let key = "(name,id)";
                let value = "'" + this.inputName + "', '" + this.inputId + "'";
                let insertSql = "insert into " + this.tableName + key + " values(" + value + ")";
                console.log(insertSql);
                plus.sqlite.executeSql({
                    // 注意这里 name 传参是数据库名，而不是表名
                    name: this.databaseName,
                    sql: insertSql,
                    success: (res) => {
                        this.log = '插入数据成功';
                        this.userInfos.push({
                            name: this.inputName,
                            id: this.inputId,
                        });
                    },
                    fail: (e) => {
                        console.log(e);
                        if (e.code === -1404) {
                            this.log = '插入失败,该数据已存在';
                        } else {
                            this.log = '插入数据失败';
                        }
                    }
                });
            },
            deleteDataByName() {
                let deleteDataByNameSql = `DELETE FROM ${this.tableName} WHERE name = '${this.inputName}'`;
                console.log(deleteDataByNameSql);
                plus.sqlite.executeSql({
                    name: this.databaseName,
                    sql: deleteDataByNameSql,
                    success: (res) => {
                        console.log(res);
                        this.log = '根据姓名删除数据成功';
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '根据姓名删除数据失败';
                    }
                });
            },
            deleteAllData() {
                let deleteAllDstaSql = `DELETE FROM ${this.tableName}`;
                console.log(deleteAllDstaSql);
                plus.sqlite.executeSql({
                    name: this.databaseName,
                    sql: deleteAllDstaSql,
                    success: (res) => {
                        console.log(res);
                        this.log = '删除所有数据成功';
                        this.userInfos = [];
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '删除所有数据失败';
                    }
                });
            },
            querryTargetData() {
                if(!this.inputName || 0 === this.inputName.length) {
                    this.log = '姓名为空，请输入姓名后再查询';
                    return;
                }
                let key = "name";
                let value = "'" + this.inputName + "'";
                let selectSql = "select * from " + this.tableName + " where " + key + " = " + value;
                console.log(selectSql);
                // 注意这里使用的是 selectSql，不是 executeSql
                plus.sqlite.selectSql({
                    name: this.databaseName,
                    sql: selectSql,
                    success: (res) => {
                        this.userInfos = [];
                        console.log(res);
                        this.log = '查询数据成功';
                        for (let i = 0; i < res.length; i++) {
                            let item = res[i];
                            this.userInfos.push({
                                name: item.name,
                                id: item.id
                            });
                        }
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '查询数据失败';
                    }
                });
            },
            querryAllData() {
                let selectSql = "select * from " + this.tableName;
                console.log(selectSql);
                // 注意这里使用的是 selectSql，不是 executeSql
                plus.sqlite.selectSql({
                    name: this.databaseName,
                    sql: selectSql,
                    success: (res) => {
                        console.log(res);
                        this.log = '查询数据成功';
                        this.userInfos = [];
                        for (let i = 0; i < res.length; i++) {
                            let item = res[i];
                            this.userInfos.push({
                                name: item.name,
                                id: item.id,
                            });
                        }
                    },
                    fail: (e) => {
                        console.log(e);
                        this.log = '查询数据失败';
                    }
                });
            }
        }
    }
</script>
<style>
    .style-content {
        width: 100%;
        height: 100%;
    }
 
    .style-line {
        width: 100%;
        height: 75upx;
        line-height: 75upx;
    }
 
    .style-row {
        display: flex;
        flex-direction: row;
    }
 
    .style-column {
        display: flex;
        flex-direction: column;
    }
 
    .style-half {
        width: 50%;
        height: 75upx;
    }
 
    .style-one-of-third {
        width: 33.33%;
        height: 75upx;
        line-height: 75upx;
    }
 
    .style-two-of-third {
        width: 66.67%;
        height: 75upx;
        line-height: 75upx;
    }
</style>