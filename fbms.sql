-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 fbms 的数据库结构
CREATE DATABASE IF NOT EXISTS `fbms` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `fbms`;


-- 导出  表 fbms.boards 结构
CREATE TABLE IF NOT EXISTS `boards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '0',
  `content` varchar(200) NOT NULL DEFAULT '0',
  `people` varchar(50) NOT NULL DEFAULT '0',
  `date` varchar(50) NOT NULL DEFAULT '0',
  `type` varchar(50) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='所有公告';

-- 正在导出表  fbms.boards 的数据：~21 rows (大约)
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
REPLACE INTO `boards` (`id`, `title`, `content`, `people`, `date`, `type`, `type_id`) VALUES
	(1, '第一条公告', '隔壁小黄求爱失败，当场发烂扎', 'pzh', '2018-8-17', '个人', 3),
	(2, '第二条公告', 'DK凯旋归来', 'lemon', '2018-8-16', '个人', 3),
	(3, '第三条公告', '老谢中了五百万', '老谢', '2018-8-14', '个人', 3),
	(4, '第四条公告', '公司福利', 'xxx', '2018-6-28', '公司', 1),
	(5, '第五条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(6, '第六条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(7, '第七条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(8, '第八条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(9, '第九条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(10, '第十条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(11, '第十一条公告', '小美称丈夫小刚嫌弃自己睡相差所以分床睡，且成天打牌、耍，无所事事，故向法院提出离婚。丈夫小刚辩称，其与妻子小美分床睡是因为小美睡相实在太差，严重影响到自己的睡眠才不得已而为之，这不是离婚的理由，小刚认为夫妻感情尚未破裂，不同意离婚。', '老谢', '2018-8-14', '个人', 3),
	(12, '第十二条公告', 'DK凯旋归来', 'lemon', '2018-8-16', '个人', 3),
	(13, '第十三条公告', '隔壁小黄求爱失败，当场发烂扎', 'pzh', '2018-8-17', '个人', 3),
	(14, '第十四条公告', 'DK凯旋归来', 'lemon', '2018-8-16', '个人', 3),
	(15, '第十五条公告', '隔壁小黄求爱失败，当场发烂扎', 'pzh', '2018-8-17', '个人', 3),
	(16, '第十六条公告', 'DK凯旋归来', 'lemon', '2018-8-16', '个人', 3),
	(17, '第十七条公告', '公司福利2', 'ABC君', '2018-2-14', '公司', 1),
	(18, '第十八条公告', '老谢中了五百万', '老谢', '2018-8-14', '个人', 3),
	(19, '第十九条公告', '隔壁小黄求爱失败，当场发烂扎', 'pzh', '2018-8-17', '个人', 3),
	(20, '第二十条公告', '隔壁小黄求爱失败，当场发烂扎', 'pzh', '2018-8-17', '个人', 3),
	(21, '第二十一条公告', '男子借货买手机一直没还钱，网贷催收人员竟把他亲生父母给找到了！', 'pzh', '2018-8-17', '个人', 3),
	(23, '我也不知道第几条了', '嗯嗯嗯', '二狗子', '1990', '个人', 3);
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;


-- 导出  表 fbms.menus 结构
CREATE TABLE IF NOT EXISTS `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '0',
  `path` varchar(50) NOT NULL DEFAULT '0' COMMENT '路由路径',
  `authorit` varchar(50) NOT NULL DEFAULT '0' COMMENT '权限：ture为可需要验证，数字为level的级别，false则不需要验证',
  `type` varchar(50) NOT NULL DEFAULT '0' COMMENT '属于哪个类',
  `type_id` int(11) NOT NULL DEFAULT '0' COMMENT '类的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='左侧栏菜单';

-- 正在导出表  fbms.menus 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
REPLACE INTO `menus` (`id`, `title`, `path`, `authorit`, `type`, `type_id`) VALUES
	(1, '个人首页', '/', '0', '个人首页', 1),
	(3, '人员信息', '/person', '0', '信息管理', 2),
	(4, '公司信息', '/company\r\n', '0', '信息管理', 2),
	(5, '日常考勤', '/attendance ', '0', '考勤管理', 3),
	(6, '请假申请', '/leave', '0', '考勤管理', 3),
	(7, '请假审批', '/approve', 'approve', '考勤管理', 3),
	(8, '我收到的', '/myget', '0', '通知公告', 4),
	(9, '我发出的', '/mysend', '0', '通知公告', 4),
	(10, '发布公告', '/board', 'board', '通知公告', 4),
	(11, '数据统计', '/data', '0', '数据统计', 5);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;


-- 导出  表 fbms.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='后台允许登陆用户';

-- 正在导出表  fbms.users 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `username`, `password`, `level`, `name`) VALUES
	(1, '1', '1', 1, '二狗子');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
