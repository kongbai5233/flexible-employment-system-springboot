/*
 Navicat Premium Dump SQL

 Source Server         : Kong
 Source Server Type    : MySQL
 Source Server Version : 90100 (9.1.0)
 Source Host           : localhost:3306
 Source Schema         : xcx

 Target Server Type    : MySQL
 Target Server Version : 90100 (9.1.0)
 File Encoding         : 65001

 Date: 03/01/2025 15:56:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for area
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area`  (
  `town` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES ('后龙镇', '后龙村');
INSERT INTO `area` VALUES ('后龙镇', '坑仔底村');
INSERT INTO `area` VALUES ('后龙镇', '许厝村');
INSERT INTO `area` VALUES ('后龙镇', '后田村');
INSERT INTO `area` VALUES ('后龙镇', '上西村');
INSERT INTO `area` VALUES ('后龙镇', '东山村');
INSERT INTO `area` VALUES ('后龙镇', '峰前村');
INSERT INTO `area` VALUES ('界山镇', '原神村');
INSERT INTO `area` VALUES ('界山镇', '崩坏村');
INSERT INTO `area` VALUES ('界山镇', '米家村');
INSERT INTO `area` VALUES ('南埔镇', '鸣潮村');
INSERT INTO `area` VALUES ('南埔镇', '库洛村');
INSERT INTO `area` VALUES ('山腰街道', '卡拉村');
INSERT INTO `area` VALUES ('山腰街道', '比丘村');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int NOT NULL,
  `add_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `poster` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `write` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '2018/06/25', '开幕雷击：\r\n\r\n\r\n       原本是想帮侄子搜一搜18岁还没长胡须正不正常，结果搜到一半给我整出这玩意，让我大呼卧槽！\r\n\r\n       因为我是火影的死忠粉，所以看到这个问题还挺好奇的，于是鼠标一点进入了搜索页面，没想到这丫的竟然还跑去问医生了...\r\n\r\n\r\n       “身边的朋友都开出了须佐能乎，自己感觉很自卑”...\r\n\r\n       妙啊，其实我老妈在我小时候调皮捣蛋的时候就已经开出了白眼，但她一直瞒着我，不愿承认自己是日向家族的人！（滑稽）\r\n\r\n\r\n       不过百度出来的结果果然没让我失望，更秀的还是底下的医生...\r\n\r\n       针对这个问题，来自三甲医院的华小斌副主任医师作出了非常专业的回答：是不是用眼过度了，检查一下吧！\r\n\r\n\r\n       就服这种一本正经的答题解惑，动不动就让人去医院检查，咋地，治疗好了还能给你开出轮回眼来？\r\n\r\n       如果这位小兄弟有幸看过我这篇专栏，建议去淘宝买一对写轮眼贴在瞳孔上，18.8包邮，从此不再自卑：\r\n\r\n\r\n       不过“万花筒写轮眼”在官方的释义中有着明确的表示：这是写轮眼的升级模式，只有经受了巨大的负面情感（如亲眼目睹亲人死亡） 的时候，产生了特殊的查克拉才能开启...\r\n\r\n\r\n\r\n       这眼开的，有点费亲戚啊。建议他三思而后开，因为这跟正月理发有得一拼...\r\n\r\n\r\n       \r\n\r\n       神奇的是，在笑出猪叫的同时我又搜到了百度上另一起沙雕事件！\r\n\r\n       你没看错，在百度汉语的名人名句里，混入了一个奇怪的东西：\r\n\r\n\r\n       确实是名人的名言，这点没错，毕竟上海堡垒威名远扬。\r\n\r\n       不过印象中的名言名句，我认为是要拿得出手，能写在作文里当引言提升作品的。这“咔咔的，咱们什么不会啊”也太骚了，我都不好意思用在文章里...\r\n\r\n        点进去一看，这家伙的名言还挺多的，而且点赞量比莎士比亚还多！\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        更秀的是，连孔子的论语都不及他一半：\r\n\r\n开幕雷击：\r\n\r\n\r\n       原本是想帮侄子搜一搜18岁还没长胡须正不正常，结果搜到一半给我整出这玩意，让我大呼卧槽！\r\n\r\n       因为我是火影的死忠粉，所以看到这个问题还挺好奇的，于是鼠标一点进入了搜索页面，没想到这丫的竟然还跑去问医生了...\r\n\r\n\r\n       “身边的朋友都开出了须佐能乎，自己感觉很自卑”...\r\n\r\n       妙啊，其实我老妈在我小时候调皮捣蛋的时候就已经开出了白眼，但她一直瞒着我，不愿承认自己是日向家族的人！（滑稽）\r\n\r\n\r\n       不过百度出来的结果果然没让我失望，更秀的还是底下的医生...\r\n\r\n       针对这个问题，来自三甲医院的华小斌副主任医师作出了非常专业的回答：是不是用眼过度了，检查一下吧！\r\n\r\n\r\n       就服这种一本正经的答题解惑，动不动就让人去医院检查，咋地，治疗好了还能给你开出轮回眼来？\r\n\r\n       如果这位小兄弟有幸看过我这篇专栏，建议去淘宝买一对写轮眼贴在瞳孔上，18.8包邮，从此不再自卑：\r\n\r\n\r\n       不过“万花筒写轮眼”在官方的释义中有着明确的表示：这是写轮眼的升级模式，只有经受了巨大的负面情感（如亲眼目睹亲人死亡） 的时候，产生了特殊的查克拉才能开启...\r\n\r\n\r\n\r\n       这眼开的，有点费亲戚啊。建议他三思而后开，因为这跟正月理发有得一拼...\r\n\r\n\r\n       \r\n\r\n       神奇的是，在笑出猪叫的同时我又搜到了百度上另一起沙雕事件！\r\n\r\n       你没看错，在百度汉语的名人名句里，混入了一个奇怪的东西：\r\n\r\n\r\n       确实是名人的名言，这点没错，毕竟上海堡垒威名远扬。\r\n\r\n       不过印象中的名言名句，我认为是要拿得出手，能写在作文里当引言提升作品的。这“咔咔的，咱们什么不会啊”也太骚了，我都不好意思用在文章里...\r\n\r\n        点进去一看，这家伙的名言还挺多的，而且点赞量比莎士比亚还多！\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        更秀的是，连孔子的论语都不及他一半：\r\n\r\n\r\n        总感觉这句话听起来还怪怪的...是时代发展的太快，还是我泡虾王老了，怎么现在的名言名句，门槛这么低了？', 'c732511469e9075a1c8dd259f3e0f126dc617615.png', '18岁还没开始开血轮眼须正常吗？', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', 'Kong');
INSERT INTO `article` VALUES (2, '2022/04/05', '经常上网冲浪的网友想必会在贴吧、B站、微博或者其他网络社区看到过以下句式： 感觉不如......XX 感觉不如XX......XX 感觉不如XX 感觉XX不如XX 感觉XX不如XX......XX诸如此类。 这些句式差别并不大，用途也大致相同。而且他们都源于一张qq聊天记录的截图，但是图里的原话并没有这么简单，图里的原话是“这是什么  个人感觉画质没原神好......画质”。 图里的人没有意识到这是现实照片，认为画质不如原神，又被当场打脸。本身这次对话就是一次误会。但是由于该截图对话极具喜剧效果，所以迅速破圈传播至各个网络社区。成为了与“C语言大佬”一样传播范围最广的原神梗之一。 在传播的过程中该图的原话逐渐简化为“感觉不如原神”、“感觉画质不如原神”或者“感觉不如原神......画质”等，而以上句式便是由此形成的模板。这些模板一般在评价某项事物时使用，不过常常带有讽刺、戏谑的意味。比如：值得一提的是，这个梗的出处还有另外一种说法，这个梗也是源于一张qq群聊天记录截图。图片里的原话是“个人感觉没原神好......画质。”在这副图里的原话与上一幅图里的原话表达的意思大致相同，关键词也都是“原神”“画质”，只是面对的对象不一样，但是他们都有一个共同点就是画质都不比原神差。只是第二张图缺少了反转的情节，没有第一张图表现出来的喜剧效果。因此这张图就没有第一张图传播的范围广，也就会有更多人认为第一张图才是起源。但不论这个梗的出处是哪幅图，作为传播范围最广的原神梗之一，它已经给很多网友带来了欢乐，这才是它最大的意义。cut-off以上便是“感觉不如原神......画质”背后的故事。', 'b2228bd34f2ea9b1b3ab709998270802064894f8.jpg', '原神模因——感觉不如原神......画质', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', 'Kong');
INSERT INTO `article` VALUES (3, '2023/08/15', '   前排提示：本贴属于硬核科普，但不会出现任何公式，本人虽是物理相关专业，但没有研究该方向，只是出于好奇并且感兴趣进行科普，为了科普的严谨性我看了大量科普以及查阅资料，再加上我个人的理解进行总结，因此科普中如果出现错误或有不严谨的地方欢迎大佬指正。\r       首先需要简单介绍一下现代理论物理背景。众所周知，现代物理学中有两个非常成功的重要理论：量子力学和广义相对论。前者描述微观粒子运动，后者阐述宏观引力现象，两个理论不仅被许多实验强有力地证明了其正确性，并且还在我们日常生活以及科技军事中有非常重要的应用。但是这两个理论在现有的物理框架下是相冲突的，并且存在着严重的矛盾。宇宙中有四大基本力：引力，电磁力，强相互作用力，弱相互作用力。在量子领域，科学家们提出了[标准模型]，标准模型不仅可以完美的解释电磁力、强相互作用力和弱相互作用力是如何形成的，还将这三种力统一了起来，即三种力可以用同一种数学模型来描述。而爱因斯坦的广义相对论则完美的描述了物质间的引力相互作用。但科学家们在量子领域无法解释引力，而在黑洞这种极端天体内部有些量子理论却失效了。于是科学家们试图寻求一种“宇宙终极理论”，即创建一套万有理论（或叫做大统一理论），宇宙中一切现象都可以用这个理论来解释，并把量子力学和广义相对论统一起来，这也是爱因斯坦在逝世前一直在研究的工作。 \r       关于标准模型这里有两个更详细的科普视频，科普质量很高，推荐大家观看，配合下面的科普视频观看效果更佳。\r05:39\r【中英双语】标准模型\r7118观看 27弹幕\r16:25\r【Quanta Magazine】粒子物理标准模型\r505观看 1弹幕\r       为了统一量子力学和广义相对论，弦理论横空出世，弦理论认为宇宙中的所有粒子都是由很小很小的线状的“弦”构成的，包括有端点的“开弦”和圈状的“闭弦”，弦的不同振动和运动就产生出各种不同的基本粒子。最初提出的弦理论有很多问题，但经过科学家们改进后，弦理论的数学基础需要适用于10维时空的宇宙，而我们生活的宇宙只有4维时空（注意是时空不是空间，即三维空间+一维时间），那剩下6个维度去哪了呢？于是有两种观点，一是膜宇宙学，认为我们的宇宙只是一个更大的9维空间的3维切片，整个宇宙就像一张膜一样；二是超弦理论，基于弦理论的进一步改进，认为剩下六个维度蜷缩在非常非常小的微观空间里，弦在这个空间里有着多样的震动模式进而形成不同的粒子，而这个蜷缩在非常非常小的微观里的六维空间就叫做卡拉比丘空间。\r', '8314d37adb492d5471b1a0d65ac2986031484496.jpg', '[科普贴]什么是卡拉比丘？以及为什么游戏叫卡拉彼丘？游戏中哪些东西与物理有关？', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', 'Kong');
INSERT INTO `article` VALUES (4, '2024/02/15', '感觉不如原神', '353cd7a38ae7ceeba5b23e6ed57495912b6f1bec.png', '感觉不如原神', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', 'Kong');

-- ----------------------------
-- Table structure for hire
-- ----------------------------
DROP TABLE IF EXISTS `hire`;
CREATE TABLE `hire`  (
  `staffID` int NOT NULL AUTO_INCREMENT,
  `head` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sexImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `age` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `manager` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `money` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `asess` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `asessImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `town` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `village` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`staffID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hire
-- ----------------------------
INSERT INTO `hire` VALUES (1, '/head/1.png', '张明凯', '/girl.png', '42', '月嫂', '60', '3.0', '/3xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (2, '/head/2.png', '王胡杨', '/boy.png', '20', '保姆', '38', '5.0', '/5xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (3, '/head/3.png', '孙浩', '/girl.png', '32', '司机', '60', '3.0', '/3xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (4, '/head/4.png', '吴铭君', '/boy.png', '50', '保姆', '45', '5.0', '/5xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (5, '/head/5.png', '胡少炜', '/girl.png', '30', '月嫂', '66', '3.0', '/3xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (6, '/head/6.png', '林文武', '/boy.png', '18', '奶妈', '30', '5.0', '/5xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (7, '/head/7.png', '邓丙山', '/girl.png', '31', '月嫂', '60', '3.0', '/3xing.png', '后龙镇', '后龙村');
INSERT INTO `hire` VALUES (8, '/head/8.png', '张奕亮', '/girl.png', '20', '维修工', '80', '5.0', '/5xing.png', '后龙镇', '上西村');
INSERT INTO `hire` VALUES (9, '/head/2.png', '李嘉豪', '/boy.png', '31', '网管', '20', '5.0', '/5xing.png', '界山镇', '原神村');
INSERT INTO `hire` VALUES (10, '/head/3.png', '刘金昌', '/girl.png', '25', '奶妈', '55', '3.0', '/3xing.png', '界山镇', '原神村');
INSERT INTO `hire` VALUES (11, '/head/4.png', '张子宇', '/girl.png', '20', '电工', '60', '5.0', '/5xing.png', '后龙镇', '坑仔底村');
INSERT INTO `hire` VALUES (12, '/head/5.png', '胡老炜', '/girl.png', '30', '网安', '66', '3.0', '/3xing.png', '后龙镇', '上西村');
INSERT INTO `hire` VALUES (13, '/head/8.png', '王胡杨二号', '/girl.png', '20', '外交官', '120', '5.0', '/5xing.png', '南埔镇', '鸣潮村');

-- ----------------------------
-- Table structure for index
-- ----------------------------
DROP TABLE IF EXISTS `index`;
CREATE TABLE `index`  (
  `imgtitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgsrc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of index
-- ----------------------------
INSERT INTO `index` VALUES ('保姆', '/baomu.png');
INSERT INTO `index` VALUES ('养老护理', '/yanglao.png');
INSERT INTO `index` VALUES ('保洁', '/baojie.png');
INSERT INTO `index` VALUES ('管道疏通', '/guandao.png');
INSERT INTO `index` VALUES ('看护陪护', '/kanhu.png');
INSERT INTO `index` VALUES ('农村工匠', '/nongcun.png');
INSERT INTO `index` VALUES ('月嫂', '/yuesao.png');
INSERT INTO `index` VALUES ('废品回收', '/feiping.png');
INSERT INTO `index` VALUES ('搬家', '/banjia.png');
INSERT INTO `index` VALUES ('家电安维', '/jiadian.png');
INSERT INTO `index` VALUES ('打扫', '/baomu.png');
INSERT INTO `index` VALUES ('回收', '/feiping.png');
INSERT INTO `index` VALUES ('农村工匠', '/nongcun.png');
INSERT INTO `index` VALUES ('保洁', '/baojie.png');
INSERT INTO `index` VALUES ('其他', '/qita.png');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `staffID` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgArry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `starttime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ordertime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `demand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `manager` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`orderId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 354 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (17, '4', 'dbe96085-d32e-46dc-9106-7bcdf0dd731c.png,584cb47b-c1c2-4822-881e-9da3c8077e3f.png,f5d92c7e-e3db-4ba7-809e-e03e404697d9.png', '2024-12-28 11:38', '2024-12-26 11:38:42', '福建省泉州市丰泽区海星街266号', '我爱德驰，嘤嘤嘤哟', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', '网安');
INSERT INTO `order` VALUES (18, '5', 'c8154c40-541b-443e-a141-e6427f4575c7.png,ad8e2b32-0b22-47de-9979-81431b987558.png', '2024-12-28 11:38', '2024-12-26 11:39:08', '福建省泉州市丰泽区交通科研楼C栋3层', '网安一哥', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', '网安');
INSERT INTO `order` VALUES (19, '2', 'c96277b6-d57b-4526-b656-06cda821e21a.png,ce7b05a7-c2e2-4bbe-ab6b-4a78a50bc6ab.png', '2024-12-27 11:43', '2024-12-26 11:43:37', '福建省泉州市丰泽区海星街100号', '12414', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', '保姆');
INSERT INTO `order` VALUES (214, '9', '', '2024-12-27 17:08', '2024-12-26 17:08:34', '福建省泉州市丰泽区海星街100号', '123', 'test', '测试员');
INSERT INTO `order` VALUES (335, '3', 'cde3ff3f-18d9-4813-8130-63e4144bbf35.png', '2024-12-28 15:44', '2024-12-26 15:44:50', '福建省泉州市丰泽区东海街道', '嘴硬哥，我是真的嘴硬啊', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', '司机');
INSERT INTO `order` VALUES (336, '3', '', '2024-12-26 15:45', '2024-12-26 15:46:00', '福建省泉州市', '111', 'oBPRp7cjA_bT1bx7ckf7tdlwZghY', '司机');

-- ----------------------------
-- Table structure for town
-- ----------------------------
DROP TABLE IF EXISTS `town`;
CREATE TABLE `town`  (
  `townName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `selectImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `unselectImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of town
-- ----------------------------
INSERT INTO `town` VALUES ('后龙镇', '/town/hou1.png', '/town/hou0.png');
INSERT INTO `town` VALUES ('界山镇', '/town/jie1.png', '/town/jie0.png');
INSERT INTO `town` VALUES ('南埔镇', '/town/nan1.png', '/town/nan0.png');
INSERT INTO `town` VALUES ('山腰街道', '/town/shan1.png', '/town/shan0.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('oBPRp7cjA_bT1bx7ckf7tdlwZghY', 'Kong', '93370dd1-48d8-4d34-892d-7a37c70fe5cc.jpeg');

SET FOREIGN_KEY_CHECKS = 1;
