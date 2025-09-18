import { Colors } from './Colors';
import { Fonts } from './Fonts';
import { Fontsize } from './Fontsize';
import { hp, wp } from './Responsive';

export const MyStyling = {
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: wp(5),
  },
  container1: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.offWhiteLight,
    paddingHorizontal: wp(5),
  },
  title: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs,
  },
};
