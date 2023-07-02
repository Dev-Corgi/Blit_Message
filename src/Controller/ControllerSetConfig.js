import controllerSet from './ControllerSet';
import GuageController from './GuageController';
import ScrollController from './ScrollController';
import SlideDetector from './SlideDetector';
const globalslidecontroller = new SlideDetector(window,0)
const globalscrollcontroller = new ScrollController(0)
const globalguage = new GuageController(globalscrollcontroller.eventTarget,"scrollevent",0,200)
controllerSet.setValue("globalguage",globalguage.eventTarget)
controllerSet.setValue("globalscroll",globalscrollcontroller.eventTarget)
controllerSet.setValue("globalslide",globalslidecontroller.eventTarget)