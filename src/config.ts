import { Schema } from 'koishi'

export interface Config {
  SteamHelperAPIHost: string,
  libMonitorCron: string,
  capsuleType: union,
}

export const Config =Schema.object({
  SteamHelperAPIHost: Schema.string().default('https://steam-family-lib-viewer.ktlab.io'),
  libMonitorCron: Schema.string().default("*/15 * * * *"),
  capsuleType: Schema.union(['Landscape', 'Portrait']).default('Landscape'),
})
.i18n({
  'zh-CN': require('./locales/zh-CN')._config,
  'en-US': require('./locales/en-US')._config,
})
