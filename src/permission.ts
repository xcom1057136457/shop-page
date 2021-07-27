import router from './router';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    document.title =
      to.meta && to.meta.title ? 'Shopper - ' + to.meta.title : 'Shopper';
    next();
  }
);

router.afterEach(() => {});
