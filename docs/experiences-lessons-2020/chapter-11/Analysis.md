---
sidebar_position: 7
---

## 11.6 Analysis

Once every person in the PES and census (in PES EAs) data has been classified as matched, incorrectly enumerated, or unmatched, this information – the matchlist – is passed to the estimation team.

The matchlist should also include the sex, age and EA of each person, and whether the location is urban or rural. Estimates are usually calculated by sex and age-groups.
In dual system estimation, non-response in PES areas is used to estimate non-response in other similar areas. A weight is calculated by dividing the number of persons counted in the PES by the number of persons counted in both the census and the PES.

We approximate the number of persons counted in both the census and the PES by the number of persons matched between the census and the PES. 
Different weights are applied for different demographic groups such as age, sex, type of locality (urban or rural) and for different geographies. 
See [Trout, Catfish and Roach: The Beginner's Guide to Census Population Estimates](https://docslib.org/doc/2577669/trout-catfish-and-roach-the-beginner-s-guide-to-census-population-estimates) for a simple explanation of dual system estimation.

Python or R code or more traditional SPSS methods can be used to carry out the analysis to obtain coverage estimates at the desired level of geography, usually aggregated by sex and age-bands.
Data science techniques such as boot-strapping can be used to create confidence intervals around the estimates.
