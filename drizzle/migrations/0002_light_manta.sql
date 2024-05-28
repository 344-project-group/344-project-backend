CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`description` text(512) NOT NULL,
	`start_time` text NOT NULL,
	`end_time` text NOT NULL,
	`date` text NOT NULL
);
