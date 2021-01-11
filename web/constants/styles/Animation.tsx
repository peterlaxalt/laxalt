// Core
import { keyframes } from "styled-components";

// Begin Component
// __________________________________________________________________________________________

export const Blink = keyframes`
  to {
    visibility: hidden;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const UpAndRotate = keyframes`
  from {
    transform: translateY(100%) rotate(3deg);
    /* opacity: 0; */
  }
  to {
    transform: translateY(0%) rotate(0deg);
    /* opacity: 1; */
  }
`;

export const PulseStroke = keyframes`
  0% {
    stroke-width: .15px;
  }
  50% {
    stroke-width: 1px;
  }
  100% {
    stroke-width: .15px;
  }
`;

export const Grain = keyframes`
  0%, 100% { transform: scale(1.5) translate(0, 0) }
  10% { transform: scale(1.5) translate(-5%, -10%) }
  20% { transform: scale(1.5) translate(-15%, 5%) }
  30% { transform: scale(1.5) translate(7%, -10%) }
  40% { transform: scale(1.5) translate(-5%, 10%) }
  50% { transform: scale(1.5) translate(-15%, 10%) }
  60% { transform: scale(1.5) translate(15%, 0%) }
  70% { transform: scale(1.5) translate(0%, 15%) }
  80% { transform: scale(1.5) translate(3%, 10%) }
  90% { transform: scale(1.5) translate(-10%, 10%) }
`;

export const OverlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .75;
  }
`;

export const FadeInScaleUpFromTop = keyframes`
  from {
    transform: scale(.9);
    transform-origin: top center;
    opacity: 0;
  }
  to {
    transform: scale(1);
    transform-origin: top center;
    opacity: 1;
  }
`;

export const Disappear = keyframes`
  from {
    display: flex;
  }
  to {
    display: none !important;
  }
`;

export const BlobRadius = keyframes`
0%,
  100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
   14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
   28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
   42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
   56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
   70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
   84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
   `;

export const Marquee = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SlideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const ScaleXIn = keyframes`
  from {
    transform-origin: left center;
    transform: scaleX(0);
  }
  to {
    transform-origin: left center;
    transform: scaleX(1);
  }
`;

export const LoaderDot = keyframes`
 0% {
    background: #f7fafc;
  }
  50% {
    background: #cbd5e0;
  }
  100% {
    background: #f7fafc;
  }
`;
