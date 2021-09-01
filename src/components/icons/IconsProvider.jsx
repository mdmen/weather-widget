// @flow
import * as React from 'react';
import EyeIcon from 'images/icons/eye.svg';
import GearIcon from 'images/icons/gear-fill.svg';
import MoistureIcon from 'images/icons/moisture.svg';
import SpeedometerIcon from 'images/icons/speedometer2.svg';
import DotsIcon from 'images/icons/three-dots-vertical.svg';
import CloseIcon from 'images/icons/x-lg.svg';
import WindIcon from 'images/icons/wind.svg';
import WaterIcon from 'images/icons/water.svg';
import TrashIcon from 'images/icons/trash-fill.svg';

export const IconsProvider = (): React.Node => (
  <div className="d-none">
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
