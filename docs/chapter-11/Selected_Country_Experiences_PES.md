# Selected Country Experiences

**Rwanda**
<p>In Rwanda, the post-enumeration survey (PES) was carried out one month after the census enumeration. A sample of 180 enumeration areas (EAs) were selected for the PES stratified by district, sector and urban/rural. Each district had 6 EAs included in the sample. This corresponds to a sampling fraction of 0.74%. A short questionnaire was developed with two sections, one about demographic characteristics of household members and another about household members’ addresses (non-movers, out-movers and in-movers) with reference to Census night.</p>

<p>Similar to the census enumeration, the PES enumeration was carried out using a CAPI application, and field monitoring was enabled using a dashboard. To maintain independence, a new enumeration team of 210 people were recruited and trained for the PES. Each district also had a Team Leader who was responsible for ensuring completeness and high-quality data collection. The daily monitoring of fieldwork was performed by a team of 10 monitors based at NISR premised supported by the real-time dashboard.</p>

<p>To perform PES analysis, a comparison of Census and PES records was done at individual level. We call this process matching and it was done basing on variables that are most likely to facilitate an optimal identification of people in both census and PES datasets. These are: household identification (HHID), names, age, sex, marital status and relationship to the head of household. Stickers or marker pens were used to label households with a unique identifier (HHID) when they were enumerated during the census. This unique identifier was collected during PES enumeration to help with matching.</p>

<p>A computer-based algorithm was developed in Python programming language to perform the matching process. The algorithm made use of deterministic matchkeys which find matches between census and PES records allowing for errors in some of the data. For example, misspelling of names, slightly different ages. See the table below for an example of our matchkeys.</p>
  
**Within household matchkeys developed for matching census to PES records following the Rwanda census**
| Matchkey | Description                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| 1        |     First Name + Last Name + Year + Sex + Household                                                                           |
| 2        | StdLEV(First Name)>0.79 + StdLEV(Last Name) >0.79 + Year + Month + Household   (see note 1)                                   |
| 3        |     First Name + Last Name + Age_Difference + Sex   +Household     (see note 2)                                               |
| 4        |     First Name + Last Name + Relationship to Head of Household   + Household                                                  |
| 5        |     StdLEV(First Name)>0.79 + StdLEV(Last Name) >0.79 +   Sex + Household                                                     |
| 6        |     Alphanames + Year + Sex +Household        (see note 3)                                                                    |
| 7        | StdLEV(Alphanames)>0.79 + Sex + Year + Household                                                                              |
| 8        |     First Name + StdLEV(Last Name)>0.69 + Sex + Age +   Household                                                             |
| 9        | First Name + ((Last Name 1 Cen = Last Name 2 PES) or (Last Name 2 Cen = Last Name 1 PES)) + <br>Age + Sex + Household         |
| 10       | StdLev(First Name)>0.79 + RLSoundex(Last Name) + Age_Difference + Sex + <br>Relationship to Head of Household + Household (see note 4)|

**Notes**
1. The standardised Levenshtein Edit Distance that measures the number of insertions, deletions or substitutions required to transform one name into another calculated as a proportion of the length of the longest name.
2. The age difference function that allows different tolerance in ages depending on the age. 
3. Alphanames is a derived variable that puts all characters of the names into alphabetical order 
4. RLSoundex is the Soundex function applied to the name with all Rs replaced with Ls (this adaption was used in Rwanda because letters *R* and *L* are pronounced the same in Kinyarwanda).

<p>NISR did not carry out a PES pilot which meant that there was no suitable data available for tuning the automatic matching algorithm prior to the PES. Therefore, the algorithms were tested and tuned during the first weeks of the PES data collection. The final matching strategy made use of deterministic matchkeys, associative matching (using existing matches to find additional matches within the same household), probabilistic matching and clerical matching. The CROW clerical matching system was adapted for use with the Rwandan data.</p>

<p>Once all the PES records were available, the final matching strategy was run and over 90% of the PES records were matched automatically. Clerical matching was used to find more matches where the amount of error in the data meant that these matches could not be made automatically. Field visits and telephone calls were done during reconciliation to find additional matching records and understand reasons behind the unmatched data.</p>

<p>Well planned and effectively delivered intensive training for the enumerators, in addition to the technology employed during data collection of the Rwanda Population and Housing Census 2022 [RPHC2022](https://www.statistics.gov.rw/datasource/fifth-population-and-housing-census-2022) laid the foundation for PES's success. Additionally, digital data collection using CAPI, real time field work monitoring and automatic matching reduced the time required for matching from 6 months in 2012 to less than a month in 2022.</p>

<p>Following completion of the matching, the matched and unmatched records were analysed to estimate the true population size of Rwanda and coverage rates using a statistical technique called dual system estimation. Furthermore, analysis of the matched records helped to estimate content errors of the census records.
Further details on the methodology used and the PES findings are available in the [Thematic Report: Post Enumeration Survey](https://www.statistics.gov.rw/publication/thematic-report-post-enumeration-survey) which has been published on the NISR website. 
</p>
