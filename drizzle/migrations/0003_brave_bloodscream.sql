CREATE TABLE `user_credentials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`password` text(256) NOT NULL,
	`email` text(256) NOT NULL
);
