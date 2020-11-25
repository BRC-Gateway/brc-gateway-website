import React from "react"
import { Link } from "gatsby"

import LayoutFullwidth from "../components/LayoutFullwidth"
import SEO from "../components/seo"

const PublicationsPage = () => (
  <LayoutFullwidth>
    <SEO title="Publications" />
    <div class="row mb-4 px-3 pt-4 pb-2 tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Publications</h4>
        <p>Citations to the BRC resource as measured Google Scholar searches using predetermined set of keywords based on name and/or acronym of each of the BRC resources, and additional keywords to filter out any false positive or negative results to the extent possible. This is complementary to the citations to the BRC publications described above and necessary because, often, users cite BRC resources by mentioning the resource name or URL in the manuscript text, instead of citing relevant publications.</p>
        <h5><a href="https://scholar.google.com/citations?user=kXLGwkYAAAAJ&hl=en&authuser=2" target="blank">Citations to BRC Publications at Google Scholar</a></h5>
        <hr />

        <h6>2020</h6>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/31452162/" target="_blank">Accessing Cryptosporidium Omic and Isolate Data via CryptoDB.org</a><br /> Warrenfeltz S, Kissinger JC; EuPathDB Team. Methods Mol Biol. 2020;2052:139-192. doi: 10.1007/978-1-4939-9748-0_10. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31452162/" target="_blank">31452162</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/31667520/" target="_blank">The PATRIC Bioinformatics Resource Center: expanding data and analysis capabilities.</a><br /> Davis JJ, Wattam AR, Aziz RK, Brettin T, Butler R, Butler RM, Chlenski P, Conrad N, Dickerman A, Dietrich EM, Gabbard JL, Gerdes S, Guard A, Kenyon RW, Machi D, Mao C, Murphy-Olson D, Nguyen M, Nordberg EK, Olsen GJ, Olson RD, Overbeek JC, Overbeek R, Parrello B, Pusch GD, Shukla M, Thomas C, VanOeffelen M, Vonstein V, Warren AS, Xia F, Xie D, Yoo H, Stevens R. Nucleic Acids Res. 2020 Jan 8;48(D1):D606-D612. doi: 10.1093/nar/gkz943. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31667520/" target="_blank">31667520</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/31758445/" target="_blank">ToxoDB: Functional Genomics Resource for Toxoplasma and Related Organisms.</a><br /> Harb OS, Roos DS. Methods Mol Biol. 2020;2071:27-47. doi: 10.1007/978-1-4939-9857-9_2. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31758445/" target="_blank">31758445</a></p>

        <hr />
        <h6>2019</h6>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/31581946/" target="_blank">A machine learning-based service for estimating quality of genomes using PATRIC.</a><br /> Parrello B, Butler R, Chlenski P, Olson R, Overbeek J, Pusch GD, Vonstein V, Overbeek R.BMC Bioinformatics. 2019 Oct 3;20(1):486. doi: 10.1186/s12859-019-3068-y. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/31581946/" target="_blank">31581946</a></p>

        <p><a href="https://europepmc.org/article/pmc/pmc7173540" target="_blank">Database and Analytical Resources for Viral Research Community.</a><br /> Phadke S, Macherla S, Scheuermann RH. Reference Module in Life Sciences. 2019. Europe PMCID: <a href="https://europepmc.org/article/pmc/pmc7173540" target="_blank">PMC7173540</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/30593617/" target="_blank">Hepatitis C Virus Database and Bioinformatics Analysis Tools in the Virus Pathogen Resource (ViPR).</a><br /> Zhang Y, Zmasek C, Sun G, Larsen CN, Scheuermann RH. Methods Mol Biol. 2019;1911:47-69. doi: 10.1007/978-1-4939-8976-8_3. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/30593617/" target="_blank">30593617</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/28968762/" target="_blank">PATRIC as a unique resource for studying antimicrobial resistance.</a><br /> Antonopoulos DA, Assaf R, Aziz RK, Brettin T, Bun C, Conrad N, Davis JJ, Dietrich EM, Disz T, Gerdes S, Kenyon RW, Machi D, Mao C, Murphy-Olson DE, Nordberg EK, Olsen GJ, Olson R, Overbeek R, Parrello B, Pusch GD, Santerre J, Shukla M, Stevens RL, VanOeffelen M, Vonstein V, Warren AS, Wattam AR, Xia F, Yoo H. Brief Bioinform. 2019 Jul 19;20(4):1094-1102. doi: 10.1093/bib/bbx083. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/28968762/" target="_blank">28968762</a></p>

        <hr />
        <h6>2018</h6>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/29277864/" target="_blank">Assembly, Annotation, and Comparative Genomics in PATRIC, the All Bacterial Bioinformatics Resource Center.</a><br /> Wattam AR, Brettin T, Davis JJ, Gerdes S, Kenyon R, Machi D, Mao C, Olson R, Overbeek R, Pusch GD, Shukla MP, Stevens R, Vonstein V, Warren A, Xia F, Yoo H. Methods Mol Biol. 2018;1704:79-101. doi: 10.1007/978-1-4939-7463-4_4. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/29277864/" target="_blank">29277864</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/29761457/" target="_blank">EuPathDB: The Eukaryotic Pathogen Genomics Database Resource.</a><br /> Warrenfeltz S, Basenko EY, Crouch K, Harb OS, Kissinger JC, Roos DS, Shanmugasundram A, Silva-Franco F. Methods Mol Biol. 2018;1757:69-113. doi: 10.1007/978-1-4939-7737-6_5. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/29761457/" target="_blank">29761457</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/30152809/" target="_blank">FungiDB: An Integrated Bioinformatic Resource for Fungi and Oomycetes.</a><br /> Basenko EY, Pulman JA, Shanmugasundram A, Harb OS, Crouch K, Starns D, Warrenfeltz S, Aurrecoechea C, Stoeckert CJ Jr, Kissinger JC, Roos DS, Hertz-Fowler C. J Fungi (Basel). 2018 Mar 20;4(1):39. doi: 10.3390/jof4010039. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/30152809/" target="_blank">30152809</a></p>

        <hr />
        <h6>2017</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/27903906/" target="_blank">EuPathDB: the eukaryotic pathogen genomics database resource.</a><br /> Aurrecoechea C, Barreto A, Basenko EY, Brestelli J, Brunk BP, Cade S, Crouch K, Doherty R, Falke D, Fischer S, Gajria B, Harb OS, Heiges M, Hertz-Fowler C, Hu S, Iodice J, Kissinger JC, Lawrence C, Li W, Pinney DF, Pulman JA, Roos DS, Shanmugasundram A, Silva-Franco F, Steinbiss S, Stoeckert CJ Jr, Spruill D, Wang H, Warrenfeltz S, Zheng J. Nucleic Acids Res. 2017 Jan 4;45(D1):D581-D591. doi: 10.1093/nar/gkw1105. Epub 2016 Nov 29. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/27903906/" target="_blank">27903906</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/27899627/" target="_blank">Improvements to PATRIC, the all-bacterial Bioinformatics Database and Analysis Resource Center.</a><br /> Wattam AR, Davis JJ, Assaf R, Boisvert S, Brettin T, Bun C, Conrad N, Dietrich EM, Disz T, Gabbard JL, Gerdes S, Henry CS, Kenyon RW, Machi D, Mao C, Nordberg EK, Olsen GJ, Murphy-Olson DE, Olson R, Overbeek R, Parrello B, Pusch GD, Shukla M, Vonstein V, Warren A, Xia F, Yoo H, Stevens RL. Nucleic Acids Res. 2017 Jan 4;45(D1):D535-D542. doi: 10.1093/nar/gkw1017. Epub 2016 Nov 29. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/27899627/" target="_blank">27899627</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/27679478/" target="_blank">Influenza Research Database: An integrated bioinformatics resource for influenza virus research.</a><br /> Zhang Y, Aevermann BD, Anderson TK, Burke DF, Dauphin G, Gu Z, He S, Kumar S, Larsen CN, Lee AJ, Li X, Macken C, Mahaffey C, Pickett BE, Reardon B, Smith T, Stewart L, Suloway C, Sun G, Tong L, Vincent AL, Walters B, Zaremba S, Zhao H, Zhou L, Zmasek C, Klem EB, Scheuermann RH. Nucleic Acids Res. 2017 Jan 4;45(D1):D466-D474. doi: 10.1093/nar/gkw857. Epub 2016 Sep 26. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/27679478/" target="_blank">27679478</a></p>

        <hr />
        <h6>2016</h6>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/27297683/" target="_blank">Antimicrobial Resistance Prediction in PATRIC and RAST.</a><br /> Davis JJ, Boisvert S, Brettin T, Kenyon RW, Mao C, Olson R, Overbeek R, Santerre J, Shukla M, Wattam AR, Will R, Xia F, Stevens R. Sci Rep. 2016 Jun 14;6:27930. doi: 10.1038/srep27930. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/27297683/" target="_blank">27297683</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/26903996/" target="_blank">PATtyFams: Protein Families for the Microbial Genomes in the PATRIC Database.</a><br /> Davis JJ, Gerdes S, Olsen GJ, Olson R, Pusch GD, Shukla M, Vonstein V, Wattam AR, Yoo H. Front Microbiol. 2016 Feb 8;7:118. doi: 10.3389/fmicb.2016.00118. eCollection 2016. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/26903996/" target="_blank">26903996</a></p>

        <hr />
        <h6>2015</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25388105/" target="_blank">The Eukaryotic Pathogen Databases: a functional genomic resource integrating data from human and veterinary parasites.</a><br /> Harb OS, Roos DS. Methods Mol Biol. 2015;1201:1-18. doi: 10.1007/978-1-4939-1438-8_1. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25388105/" target="_blank">25388105</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25666585/" target="_blank">RASTtk: a modular and extensible implementation of the RAST algorithm for building custom annotation pipelines and annotating batches of genomes.</a><br /> Brettin T, Davis JJ, Disz T, Edwards RA, Gerdes S, Olsen GJ, Olson R, Overbeek R, Parrello B, Pusch GD, Shukla M, Thomason JA 3rd, Stevens R, Vonstein V, Wattam AR, Xia F. Sci Rep. 2015 Feb 10;5:8365. doi: 10.1038/srep08365. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25666585/" target="_blank">25666585</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25510499/" target="_blank">VectorBase: an updated bioinformatics resource for invertebrate vectors and other organisms related with human diseases.</a><br /> Giraldo-Calderón GI, Emrich SJ, MacCallum RM, Maslen G, Dialynas E, Topalis P, Ho N, Gesing S; VectorBase Consortium, Madey G, Collins FH, Lawson D. Nucleic Acids Res. 2015 Jan;43(Database issue):D707-13. doi: 10.1093/nar/gku1117. Epub 2014 Dec 15. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25510499/" target="_blank">25510499</a></p>

        <hr />
        <h6>2014</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25172288/" target="_blank">Comparative genomic analysis at the PATRIC, a bioinformatic resource center.</a><br /> Wattam AR, Gabbard JL, Shukla M, Sobral BW. Methods Mol Biol. 2014;1197:287-308. doi: 10.1007/978-1-4939-1261-2_17. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25172288/" target="_blank">25172288</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25273106/" target="_blank">Curation, integration and visualization of bacterial virulence factors in PATRIC.</a><br /> Mao C, Abraham D, Wattam AR, Wilson MJ, Shukla M, Yoo HS, Sobral BW.Bioinformatics. 2015 Jan 15;31(2):252-8. doi: 10.1093/bioinformatics/btu631. Epub 2014 Sep 30.PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25273106/" target="_blank">25273106</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/24293654/" target="_blank">The SEED and the Rapid Annotation of microbial genomes using Subsystems Technology (RAST).</a><br /> Overbeek R, Olson R, Pusch GD, Olsen GJ, Davis JJ, Disz T, Edwards RA, Gerdes S, Parrello B, Shukla M, Vonstein V, Wattam AR, Xia F, Stevens R.Nucleic Acids Res. 2014 Jan;42(Database issue):D206-14. doi: 10.1093/nar/gkt1226. Epub 2013 Nov 29.PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/24293654/" target="_blank">24293654</a></p>

        <hr />
        <h6>2013</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/23175615/" target="_blank">EuPathDB: the eukaryotic pathogen database.</a><br /> Aurrecoechea C, Barreto A, Brestelli J, Brunk BP, Cade S, Doherty R, Fischer S, Gajria B, Gao X, Gingle A, Grant G, Harb OS, Heiges M, Hu S, Iodice J, Kissinger JC, Kraemer ET, Li W, Pinney DF, Pitts B, Roos DS, Srinivasamoorthy G, Stoeckert CJ Jr, Wang H, Warrenfeltz S. Nucleic Acids Res. 2013 Jan;41(Database issue):D684-91. doi: 10.1093/nar/gks1113. Epub 2012 Nov 21. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/23175615/" target="_blank">23175615</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/24225323/" target="_blank">PATRIC, the bacterial bioinformatics database and analysis resource.</a><br /> Wattam AR, Abraham D, Dalay O, Disz TL, Driscoll T, Gabbard JL, Gillespie JJ, Gough R, Hix D, Kenyon R, Machi D, Mao C, Nordberg EK, Olson R, Overbeek R, Pusch GD, Shukla M, Schulman J, Stevens RL, Sullivan DE, Vonstein V, Warren A, Will R, Wilson MJ, Yoo HS, Zhang C, Zhang Y, Sobral BW. Nucleic Acids Res. 2014 Jan;42(Database issue):D581-91. doi: 10.1093/nar/gkt1099. Epub 2013 Nov 12. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/24225323/" target="_blank">24225323</a></p>

        <hr />
        <h6>2012</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/22260278/" target="_blank">Influenza research database: an integrated bioinformatics resource for influenza research and surveillance.</a><br /> Squires RB, Noronha J, Hunt V, García-Sastre A, Macken C, Baumgarth N, Suarez D, Pickett BE, Zhang Y, Larsen CN, Ramsey A, Zhou L, Zaremba S, Kumar S, Deitrich J, Klem E, Scheuermann RH. Influenza Other Respir Viruses. 2012 Nov;6(6):404-16. doi: 10.1111/j.1750-2659.2011.00331.x. Epub 2012 Jan 20. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/22260278/" target="_blank">22260278</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/23202522/" target="_blank">Virus pathogen database and analysis resource (ViPR): a comprehensive bioinformatics database and analysis resource for the coronavirus research community.</a><br /> Pickett BE, Greer DS, Zhang Y, Stewart L, Zhou L, Sun G, Gu Z, Kumar S, Zaremba S, Larsen CN, Jen W, Klem EB, Scheuermann RH. Viruses. 2012 Nov 19;4(11):3209-26. doi: 10.3390/v4113209. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/23202522/" target="_blank">23202522</a></p>

        <hr />
        <h6>2011</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/22064857/" target="_blank">FungiDB: an integrated functional genomics database for fungi.</a><br /> Stajich JE, Harris T, Brunk BP, Brestelli J, Fischer S, Harb OS, Kissinger JC, Li W, Nayak V, Pinney DF, Stoeckert CJ Jr, Roos DS. Nucleic Acids Res. 2012 Jan;40(Database issue):D675-81. doi: 10.1093/nar/gkr918. Epub 2011 Nov 7. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/22064857/" target="_blank">22064857</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/21896772/" target="_blank">PATRIC: the comprehensive bacterial bioinformatics resource with a focus on human pathogenic species.</a><br /> Gillespie JJ, Wattam AR, Cammer SA, Gabbard JL, Shukla MP, Dalay O, Driscoll T, Hix D, Mane SP, Mao C, Nordberg EK, Scott M, Schulman JR, Snyder EE, Sullivan DE, Wang C, Warren A, Williams KP, Xue T, Yoo HS, Zhang C, Zhang Y, Will R, Kenyon RW, Sobral BW. Infect Immun. 2011 Nov;79(11):4286-98. doi: 10.1128/IAI.00207-11. Epub 2011 Sep 6. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/21896772/" target="_blank">21896772</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/21901743/" target="_blank">Using OrthoMCL to assign proteins to OrthoMCL-DB groups or to cluster proteomes into new ortholog groups.</a><br /> Fischer S, Brunk BP, Chen F, Gao X, Harb OS, Iodice JB, Shanmugam D, Roos DS, Stoeckert CJ Jr. Curr Protoc Bioinformatics. 2011 Sep;Chapter 6:Unit 6.12.1-19. doi: 10.1002/0471250953.bi0612s35. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/21901743/" target="_blank">21901743</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/22135296/" target="_blank">VectorBase: improvements to a bioinformatics resource for invertebrate vector genomics.</a><br /> Megy K, Emrich SJ, Lawson D, Campbell D, Dialynas E, Hughes DS, Koscielny G, Louis C, Maccallum RM, Redmond SN, Sheehan A, Topalis P, Wilson D; VectorBase Consortium. Nucleic Acids Res. 2012 Jan;40(Database issue):D729-34. doi: 10.1093/nar/gkr1089. Epub 2011 Dec 1. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/22135296/" target="_blank">22135296</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/22006842/" target="_blank">ViPR: an open bioinformatics database and analysis resource for virology research.</a><br /> Pickett BE, Sadat EL, Zhang Y, Noronha JM, Squires RB, Hunt V, Liu M, Kumar S, Zaremba S, Gu Z, Zhou L, Larson CN, Dietrich J, Klem EB, Scheuermann RH. Nucleic Acids Res. 2012 Jan;40(Database issue):D593-8. doi: 10.1093/nar/gkr859. Epub 2011 Oct 17. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/22006842/" target="_blank">22006842</a></p>

        <hr />
        <h6>2010</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/20974635/" target="_blank">AmoebaDB and MicrosporidiaDB: functional genomic resources for Amoebozoa and Microsporidia species.</a><br /> Aurrecoechea C, Barreto A, Brestelli J, Brunk BP, Caler EV, Fischer S, Gajria B, Gao X, Gingle A, Grant G, Harb OS, Heiges M, Iodice J, Kissinger JC, Kraemer ET, Li W, Nayak V, Pennington C, Pinney DF, Pitts B, Roos DS, Srinivasamoorthy G, Stoeckert CJ Jr, Treatman C, Wang H. Nucleic Acids Res. 2011 Jan;39(Database issue):D612-9. doi: 10.1093/nar/gkq1006. Epub 2010 Oct 24. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/20974635/" target="_blank">20974635</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/19914931/" target="_blank">EuPathDB: a portal to eukaryotic pathogen databases.</a><br /> Aurrecoechea C, Brestelli J, Brunk BP, Fischer S, Gajria B, Gao X, Gingle A, Grant G, Harb OS, Heiges M, Innamorato F, Iodice J, Kissinger JC, Kraemer ET, Li W, Miller JA, Nayak V, Pennington C, Pinney DF, Roos DS, Ross C, Srinivasamoorthy G, Stoeckert CJ Jr, Thibodeau R, Treatman C, Wang H. Nucleic Acids Res. 2010 Jan;38(Database issue):D415-9. doi: 10.1093/nar/gkp941. Epub 2009 Nov 13. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/19914931/" target="_blank">19914931</a></p>

        <hr />
        <h6>2009</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18957442/" target="_blank">PlasmoDB: a functional genomic database for malaria parasites.</a><br /> Aurrecoechea C, Brestelli J, Brunk BP, Dommer J, Fischer S, Gajria B, Gao X, Gingle A, Grant G, Harb OS, Heiges M, Innamorato F, Iodice J, Kissinger JC, Kraemer E, Li W, Miller JA, Nayak V, Pennington C, Pinney DF, Roos DS, Ross C, Stoeckert CJ Jr, Treatman C, Wang H. Nucleic Acids Res. 2009 Jan;37(Database issue):D539-43. doi: 10.1093/nar/gkn814. Epub 2008 Oct 28. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18957442/" target="_blank">18957442</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/19843604/" target="_blank">TriTrypDB: a functional genomic resource for the Trypanosomatidae.</a><br /> Aslett M, Aurrecoechea C, Berriman M, Brestelli J, Brunk BP, Carrington M, Depledge DP, Fischer S, Gajria B, Gao X, Gardner MJ, Gingle A, Grant G, Harb OS, Heiges M, Hertz-Fowler C, Houston R, Innamorato F, Iodice J, Kissinger JC, Kraemer E, Li W, Logan FJ, Miller JA, Mitra S, Myler PJ, Nayak V, Pennington C, Phan I, Pinney DF, Ramasamy G, Rogers MB, Roos DS, Ross C, Sivam D, Smith DF, Srinivasamoorthy G, Stoeckert CJ Jr, Subramanian S, Thibodeau R, Tivey A, Treatman C, Velarde G, Wang H. Nucleic Acids Res. 2010 Jan;38(Database issue):D457-62. doi: 10.1093/nar/gkp851. Epub 2009 Oct 20. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/19843604/" target="_blank">19843604</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/19028744/" target="_blank">VectorBase: a data resource for invertebrate vector genomics.</a><br /> Lawson D, Arensburger P, Atkinson P, Besansky NJ, Bruggner RV, Butler R, Campbell KS, Christophides GK, Christley S, Dialynas E, Hammond M, Hill CA, Konopinski N, Lobo NF, MacCallum RM, Madey G, Megy K, Meyer J, Redmond S, Severson DW, Stinson EO, Topalis P, Birney E, Gelbart WM, Kafatos FC, Louis C, Collins FH. Nucleic Acids Res. 2009 Jan;37(Database issue):D583-7. doi: 10.1093/nar/gkn857. Epub 2008 Nov 21. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/19028744/" target="_blank">19028744</a></p>

        <hr />
        <h6>2008</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18237287/" target="_blank">Anatomical ontologies of mosquitoes and ticks, and their web browsers in VectorBase.</a><br /> Topalis P, Tzavlaki C, Vestaki K, Dialynas E, Sonenshine DE, Butler R, Bruggner RV, Stinson EO, Collins FH, Louis C. Insect Mol Biol. 2008 Feb;17(1):87-9. doi: 10.1111/j.1365-2583.2008.00781.x. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18237287/" target="_blank">18237287</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18262474/" target="_blank">Genomic resources for invertebrate vectors of human pathogens, and the role of VectorBase.</a><br /> Megy K, Hammond M, Lawson D, Bruggner RV, Birney E, Collins FH.Infect Genet Evol. 2009 May;9(3):308-13. doi: 10.1016/j.meegid.2007.12.007. Epub 2008 Jan 3. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18262474/" target="_blank">18262474</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18824479/" target="_blank">GiardiaDB and TrichDB: integrated genomic resources for the eukaryotic protist pathogens Giardia lamblia and Trichomonas vaginalis.</a><br /> Aurrecoechea C, Brestelli J, Brunk BP, Carlton JM, Dommer J, Fischer S, Gajria B, Gao X, Gingle A, Grant G, Harb OS, Heiges M, Innamorato F, Iodice J, Kissinger JC, Kraemer E, Li W, Miller JA, Morrison HG, Nayak V, Pennington C, Pinney DF, Roos DS, Ross C, Stoeckert CJ Jr, Sullivan S, Treatman C, Wang H. Nucleic Acids Res. 2009 Jan;37(Database issue):D526-30. doi: 10.1093/nar/gkn631. Epub 2008 Sep 29. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18824479/" target="_blank">18824479</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18261238/" target="_blank">The RAST Server: rapid annotations using subsystems technology.</a><br /> Aziz RK, Bartels D, Best AA, DeJongh M, Disz T, Edwards RA, Formsma K, Gerdes S, Glass EM, Kubal M, Meyer F, Olsen GJ, Olson R, Osterman AL, Overbeek RA, McNeil LK, Paarmann D, Paczian T, Parrello B, Pusch GD, Reich C, Stevens R, Vassieva O, Vonstein V, Wilke A, Zagnitko O. BMC Genomics. 2008 Feb 8;9:75. doi: 10.1186/1471-2164-9-75. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18261238/" target="_blank">18261238</a></p>

        <hr />
        <h6>2007</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18003657/" target="_blank">ToxoDB: an integrated Toxoplasma gondii database resource.</a><br /> Gajria B, Bahl A, Brestelli J, Dommer J, Fischer S, Gao X, Heiges M, Iodice J, Kissinger JC, Mackey AJ, Pinney DF, Roos DS, Stoeckert CJ Jr, Wang H, Brunk BP. Nucleic Acids Res. 2008 Jan;36(Database issue):D553-6. doi: 10.1093/nar/gkm981. Epub 2007 Nov 14. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18003657/" target="_blank">18003657</a></p>

        <hr />
        <h6>2006</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/18237287/" target="_blank">Anatomical ontologies of mosquitoes and ticks and their web browsers in VectorBase.
        PlasmoDB v5: new looks, new genomes.
</a><br /> Stoeckert CJ Jr, Fischer S, Kissinger JC, Heiges M, Aurrecoechea C, Gajria B, Roos DS. Trends Parasitol. 2006 Dec;22(12):543-6. doi: 10.1016/j.pt.2006.09.005. Epub 2006 Oct 6. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/18237287/" target="_blank">18237287</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/17098930/" target="_blank">ApiDB: integrated resources for the apicomplexan bioinformatics resource center.</a><br /> Aurrecoechea C, Heiges M, Wang H, Wang Z, Fischer S, Rhodes P, Miller J, Kraemer E, Stoeckert CJ Jr, Roos DS, Kissinger JC. Nucleic Acids Res. 2007 Jan;35(Database issue):D427-30. doi: 10.1093/nar/gkl880. Epub 2006 Nov 10. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/17098930/" target="_blank">17098930</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/16381902/" target="_blank">CryptoDB: a Cryptosporidium bioinformatics resource update.</a><br /> Heiges M, Wang H, Robinson E, Aurrecoechea C, Gao X, Kaluskar N, Rhodes P, Wang S, He CZ, Su Y, Miller J, Kraemer E, Kissinger JC. Nucleic Acids Res. 2006 Jan 1;34(Database issue):D419-22. doi: 10.1093/nar/gkj078. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/16381902/" target="_blank">16381902</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/16381887/" target="_blank">OrthoMCL-DB: querying a comprehensive multi-species collection of ortholog groups.</a><br /> Chen F, Mackey AJ, Stoeckert CJ Jr, Roos DS. Nucleic Acids Res. 2006 Jan 1;34(Database issue):D363-8. doi: 10.1093/nar/gkj123. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/16381887/" target="_blank">16381887</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/17142235/" target="_blank">PATRIC: the VBI PathoSystems Resource Integration Center.</a><br /> Snyder EE, Kampanya N, Lu J, Nordberg EK, Karur HR, Shukla M, Soneja J, Tian Y, Xue T, Yoo H, Zhang F, Dharmanolla C, Dongre NV, Gillespie JJ, Hamelius J, Hance M, Huntington KI, Jukneliene D, Koziski J, Mackasmiel L, Mane SP, Nguyen V, Purkayastha A, Shallom J, Yu G, Guo Y, Gabbard J, Hix D, Azad AF, Baker SC, Boyle SM, Khudyakov Y, Meng XJ, Rupprecht C, Vinje J, Crasta OR, Czar MJ, Dickerman A, Eckart JD, Kenyon R, Will R, Setubal JC, Sobral BW. Nucleic Acids Res. 2007 Jan;35(Database issue):D401-6. doi: 10.1093/nar/gkl858. Epub 2006 Nov 16. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/17142235/" target="_blank">17142235</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/17145709/" target="_blank">VectorBase: a home for invertebrate vectors of human pathogens.</a><br /> Lawson D, Arensburger P, Atkinson P, Besansky NJ, Bruggner RV, Butler R, Campbell KS, Christophides GK, Christley S, Dialynas E, Emmert D, Hammond M, Hill CA, Kennedy RC, Lobo NF, MacCallum MR, Madey G, Megy K, Redmond S, Russo S, Severson DW, Stinson EO, Topalis P, Zdobnov EM, Birney E, Gelbart WM, Kafatos FC, Louis C, Collins FH. Nucleic Acids Res. 2007 Jan;35(Database issue):D503-5. doi: 10.1093/nar/gkl960. Epub 2006 Dec 1. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/17145709/" target="_blank">17145709</a></p>

        <hr />
        <h6>2004</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/14681426/" target="_blank">CryptoDB: the Cryptosporidium genome resource.</a><br /> Puiu D, Enomoto S, Buck GA, Abrahamsen MS, Kissinger JC. Nucleic Acids Res. 2004 Jan 1;32(Database issue):D329-31. doi: 10.1093/nar/gkh050. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/14681426/" target="_blank">14681426</a></p>

        <hr />
        <h6>2003</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/12952885/" target="_blank">OrthoMCL: identification of ortholog groups for eukaryotic genomes.</a><br /> Li L, Stoeckert CJ Jr, Roos DS. Genome Res. 2003 Sep;13(9):2178-89. doi: 10.1101/gr.1224503. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/12952885/" target="_blank">12952885</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/14962373/" target="_blank">PlasmoDB: exploring genomics and post-genomics data of the malaria parasite, Plasmodium falciparum.</a><br /> Fraunholz MJ, Roos DS. Redox Rep. 2003;8(5):317-20. doi: 10.1179/135100003225002961. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/14962373/" target="_blank">14962373</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/12519984/" target="_blank">PlasmoDB: the Plasmodium genome resource. A database integrating experimental and computational data.</a><br /> Bahl A, Brunk B, Crabtree J, Fraunholz MJ, Gajria B, Grant GR, Ginsburg H, Gupta D, Kissinger JC, Labo P, Li L, Mailman MD, Milgram AJ, Pearson DS, Roos DS, Schug J, Stoeckert CJ Jr, Whetzel P. Nucleic Acids Res. 2003 Jan 1;31(1):212-5. doi: 10.1093/nar/gkg081. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/12519984/" target="_blank">12519984</a></p>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/12519989/" target="_blank">ToxoDB: accessing the Toxoplasma gondii genome.</a><br /> Kissinger JC, Gajria B, Li L, Paulsen IT, Roos DS. Nucleic Acids Res. 2003 Jan 1;31(1):234-6. doi: 10.1093/nar/gkg072. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/12519989/" target="_blank">12519989</a></p>

        <hr />
        <h6>2002</h6>

        <p><a href="https://pubmed.ncbi.nlm.nih.gov/11752262/" target="_blank">PlasmoDB: the Plasmodium genome resource. An integrated database providing tools for accessing, analyzing and mapping expression and sequence data (both finished and unfinished).</a><br /> Bahl A, Brunk B, Coppel RL, Crabtree J, Diskin SJ, Fraunholz MJ, Grant GR, Gupta D, Huestis RL, Kissinger JC, Labo P, Li L, McWeeney SK, Milgram AJ, Roos DS, Schug J, Stoeckert CJ Jr. Nucleic Acids Res. 2002 Jan 1;30(1):87-90. doi: 10.1093/nar/30.1.87. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/11752262/" target="_blank">11752262</a></p>

      </div>
    </div>
  </LayoutFullwidth>
)

export default PublicationsPage