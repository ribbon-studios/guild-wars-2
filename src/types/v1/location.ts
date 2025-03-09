import { Coordinate2D, Coordinate3D } from './coordinate';

export enum LocationType {
  SPHERE = 'sphere',
  CYLINDER = 'cylinder',
  POLY = 'poly',
}

export type Location =
  | {
      type: LocationType.SPHERE;

      /**
       * The center coordinates of the event.
       */
      center: Coordinate3D;

      /**
       * Radius of the sphere.
       */
      radius: number;

      /**
       * Rotation of the cylinder.
       */
      rotation: number;
    }
  | {
      type: LocationType.POLY;

      /**
       * The center coordinates of the event.
       */
      center: Coordinate3D;

      z_range: Coordinate2D;

      /**
       * The x/y coordinates representing points of the polygon.
       */
      points: Coordinate2D[];
    }
  | {
      type: LocationType.CYLINDER;

      /**
       * The center coordinates of the event.
       */
      center: Coordinate3D;

      /**
       * Height of the cylinder.
       */
      height: number;

      /**
       * Radius of the cylinder.
       */
      radius: number;

      /**
       * Rotation of the cylinder.
       */
      rotation: number;
    };
