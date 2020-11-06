import {
  chartCollectionIcons as chart,
  coreCollectionIcons as core,
  commerceCollectionIcons as commerce,
  essentialCollectionIcons as essential,
  mediaCollectionIcons as media,
  socialCollectionIcons as social,
  travelCollectionIcons as travel,
  textEditCollectionIcons as textEdit,
  technologyCollectionIcons as technology,
  // aliases
  chartCollectionAliases as chartAliases,
  coreCollectionAliases as coreAliases,
  commerceCollectionAliases as commerceAliases,
  essentialCollectionAliases as essentialAliases,
  mediaCollectionAliases as mediaAliases,
  socialCollectionAliases as socialAliases,
  travelCollectionAliases as travelAliases,
  textEditCollectionAliases as textEditAliases,
  technologyCollectionAliases as technologyAliases,
  // load
  loadChartIconSet,
  loadEssentialIconSet,
  loadCommerceIconSet,
  loadMediaIconSet,
  loadSocialIconSet,
  loadTechnologyIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
} from '@cds/core/icon';

if (window) {
  loadChartIconSet();
  loadEssentialIconSet();
  loadCommerceIconSet();
  loadMediaIconSet();
  loadSocialIconSet();
  loadTechnologyIconSet();
  loadTextEditIconSet();
  loadTravelIconSet();
}

const ICONS_TO_HIDE = ['vm-bug', 'vm-bug-inverse'];

const arrIconsToObjIcons = icons => {
  return icons
    .filter(icon => ICONS_TO_HIDE.indexOf(icon[0]) === -1)
    .map(icon => Object.assign({}, { iconName: icon[0], iconSnippet: icon[1] }));
};

const arrAliasesToObjAliases = aliases => {
  return aliases.reduce((objAliases, alias) => {
    objAliases[alias[0]] = alias[1];
    return objAliases;
  }, {});
};

export default {
  allSets: {
    core: {
      setName: 'Core',
      icons: arrIconsToObjIcons(core),
    },
    essential: {
      setName: 'Essential',
      icons: arrIconsToObjIcons(essential),
    },
    commerce: {
      setName: 'Commerce',
      icons: arrIconsToObjIcons(commerce),
    },
    media: {
      setName: 'Media',
      icons: arrIconsToObjIcons(media),
    },
    social: {
      setName: 'Social',
      icons: arrIconsToObjIcons(social),
    },
    travel: {
      setName: 'Travel',
      icons: arrIconsToObjIcons(travel),
    },
    'text-edit': {
      setName: 'Text edit',
      icons: arrIconsToObjIcons(textEdit),
    },
    technology: {
      setName: 'Technology',
      icons: arrIconsToObjIcons(technology),
    },
    chart: {
      setName: 'Chart',
      icons: arrIconsToObjIcons(chart),
    },
  },
  allIcons: {
    ...arrIconsToObjIcons(chart).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(core).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(commerce).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(essential).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(media).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(social).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(travel).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(textEdit).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
    ...arrIconsToObjIcons(technology).reduce((set, icon) => {
      set[icon.iconName] = icon.iconSnippet;
      return set;
    }, {}),
  },
  allAliases: {
    ...arrAliasesToObjAliases(coreAliases),
    ...arrAliasesToObjAliases(essentialAliases),
    ...arrAliasesToObjAliases(commerceAliases),
    ...arrAliasesToObjAliases(mediaAliases),
    ...arrAliasesToObjAliases(socialAliases),
    ...arrAliasesToObjAliases(travelAliases),
    ...arrAliasesToObjAliases(textEditAliases),
    ...arrAliasesToObjAliases(technologyAliases),
    ...arrAliasesToObjAliases(chartAliases),
  },
};
