import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { Fontsize } from './Fontsize';
import { hp, wp } from './Responsive';

export const MyStyling = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  container4: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  container5: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    marginHorizontal: wp(5),
    paddingBottom: hp(10),
  },
  contentContainerStyle2: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    paddingBottom: hp(10),
  },
  title: {
    color: Colors.bg,
    fontFamily: Fonts.bold,
    fontSize: Fontsize.sm,
  },
  heading: {
    textAlign: 'left',
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: Fontsize.l,
    textTransform: 'capitalize',
    lineHeight: Fontsize.l,
  },
  heading2: {
    textAlign: 'left',
    color: Colors.black,
    fontFamily: Fonts.bold,
    fontSize: Fontsize.mm,
    textTransform: 'capitalize',
    lineHeight: Fontsize.l,
  },
  title2: {
    textAlign: 'left',
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fontsize.m,
    textTransform: 'capitalize',
    lineHeight: Fontsize.m,
  },
  text: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xs,
    textTransform: 'capitalize',
    lineHeight: Fontsize.l,
  },
};
