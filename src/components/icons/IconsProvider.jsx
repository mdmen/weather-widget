// @flow
import * as React from 'react';
import EyeIcon from '../../assets/icons/eye.svg';
import GearIcon from '../../assets/icons/gear-fill.svg';
import MoistureIcon from '../../assets/icons/moisture.svg';
import SpeedometerIcon from '../../assets/icons/speedometer2.svg';
import DotsIcon from '../../assets/icons/three-dots-vertical.svg';
import CloseIcon from '../../assets/icons/x-lg.svg';
import WindIcon from '../../assets/icons/wind.svg';
import WaterIcon from '../../assets/icons/water.svg';
import TrashIcon from '../../assets/icons/trash-fill.svg';

export const IconsProvider = (): React.Node => (
  <div aria-hidden="true" className="visually-hidden">
    <EyeIcon id="icon-eye" />
    <GearIcon id="icon-gear" />
    <MoistureIcon id="icon-moisture" />
    <SpeedometerIcon id="icon-speedometer2" />
    <DotsIcon id="icon-dots" />
    <CloseIcon id="icon-close" />
    <WindIcon id="icon-wind" />
    <WaterIcon id="icon-water" />
    <TrashIcon id="icon-trash" />
  </div>
);
