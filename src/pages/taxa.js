import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TaxaPage = () => (
  <Layout>
    <SEO title="Taxa" />
    <div class="row mb-4 px-3 pt-4 pb-2 bg-wash tw-border-b-4 tw-border-gray-600">
      <div class="col-12">
        <h4>Taxa</h4>
        <p>The BRCs include, but not limited to, organisms in the <a href="https://www.niaid.nih.gov/node/3275" target="_blank">NIAID list of emerging and re-emerging infectious diseases</a>, plus vectors of human pathogens. The table below provides direct links to major taxonomic groups supported by the BRCs.</p>

        <div className="row">
          <div className="col-md-3">
            <h6><a href="https://www.fludb.org/brc/home.spg?decorator=influenza">Influenza</a> &amp; other <a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr">Viruses</a></h6>
            <hr />
            <ul>
              <li><a href="https://www.fludb.org/brc/home.spg?decorator=influenza">Influenza</a></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=calici">Caliciviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=corona">Coronaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=flavi">Flaviviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=hepe">Hepeviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=picorna">Picornaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=picorna">Picornaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=toga">Togaviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=vipr#">Bunyavirales</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=filo">Filoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=paramyxo">Paramyxoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=pneumo">Pneumoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=rhabdo">Rhabdoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=reo">Reoviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=herpes">Herpesviridae</a></i></li>
              <li><i><a href="https://www.viprbrc.org/brc/home.spg?decorator=pox">Poxviridae</a></i></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://patricbrc.org/view/Taxonomy/2">Bacteria</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/469#view_tab=overview">Acinetobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1386#view_tab=overview">Bacillus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/773#view_tab=overview">Bartonella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/64895#view_tab=overview">Borreliella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/234#view_tab=overview">Brucella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/32008#view_tab=overview">Burkholderia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/194#view_tab=overview">Campylobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/810#view_tab=overview">Chlamydia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1485#view_tab=overview">Clostridium</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/776#view_tab=overview">Coxiella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/943#view_tab=overview">Ehrlichia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/561#view_tab=overview">Escherichia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/262#view_tab=overview">Francisella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/209#view_tab=overview">Helicobacter</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1637#view_tab=overview">Listeria</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1763#view_tab=overview">Mycobacterium</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/286#view_tab=overview">Pseudomonas</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/780#view_tab=overview">Rickettsia</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/590#view_tab=overview">Salmonella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/620#view_tab=overview">Shigella</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1279#view_tab=overview">Staphylococcus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/1301#view_tab=overview">Streptococcus</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/662#view_tab=overview">Vibrio</a></i></li>
              <li><i><a href="https://patricbrc.org/view/Taxonomy/629#view_tab=overview">Yersinia</a></i></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/2157">Archaea</a></li>
              <li><a href="https://patricbrc.org/view/Taxonomy/10239">Bacteriophages</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://veupathdb.org/veupathdb/app/search/organism/GenomeDataTypes?autoRun">Protozoa</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://amoebadb.org/">Acanthamoeba</a></i></li>
              <li><i><a href="https://piroplasmadb.org/">Babesia</a></i></li>
              <li><i><a href="https://cryptodb.org/">Cryptosporidium</a></i></li>
              <li><i><a href="https://toxodb.org/">Cyclospora</a></i></li>
              <li><i><a href="https://amoebadb.org/">Entamoeba</a></i></li>
              <li><i><a href="https://giardiadb.org/">Giardia</a></i></li>
              <li><i><a href="https://tritrypdb.org/">Leishmania</a></i></li>
              <li><i><a href="https://microsporidiadb.org/">Microsporidia</a></i></li>
              <li><i><a href="https://amoebadb.org/">Naegleria</a></i></li>
              <li><i><a href="https://plasmodb.org/">Plasmodium</a></i></li>
              <li><i><a href="https://piroplasmadb.org/">Theileria</a></i></li>
              <li><i><a href="https://toxodb.org/">Toxoplasma</a></i></li>
              <li><i><a href="https://trichdb.org/">Trichomonas</a></i></li>
              <li><i><a href="https://tritrypdb.org/">Trypanosoma</a></i></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6><a href="https://fungidb.org/fungidb/app/search/organism/GenomeDataTypes?autoRun">Fungi</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://fungidb.org/">Aspergillus</a></i></li>
              <li><i><a href="https://fungidb.org/fungidb/app">Blastomyces</a></i></li>
              <li><i><a href="https://fungidb.org/">Candida</a></i></li>
              <li><i><a href="https://fungidb.org/">Coccidioides</a></i></li>
              <li><i><a href="https://fungidb.org/">Cryptococcus</a></i></li>
              <li><i><a href="https://fungidb.org/">Histoplasma</a></i></li>
              <li><i><a href="https://fungidb.org/fungidb/app">Pneumocystis</a></i></li>
              <li><i><a href="https://fungidb.org/">Oomycetes</a></i></li>
            </ul>

            <h6><a href="https://vectorbase.org/vectorbase/app/search/organism/GenomeDataTypes?autoRun">Vectors</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://vectorbase.org/">Aedes</a></i></li>
              <li><i><a href="https://vectorbase.org/">Anopheles</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Biomphalaria</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Cimex</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Culex</a></i></li>
              <li><i><a href="https://vectorbase.org/">Glossina</a></i></li>
              <li><i><a href="https://vectorbase.org/">Ixodes</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Leptotrombidium</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Lutzomyia</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Pediculus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Phlebotomus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Rhipicephalus</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Rhodnius</a></i></li>
              <li><i><a href="https://vectorbase.org/vectorbase/app">Sarcoptes</a></i></li>
            </ul>

            <h6><a href="https://hostdb.org/hostdb/app/search/organism/GenomeDataTypes?autoRun">Host Mammals</a></h6>
            <hr />
            <ul>
              <li><i><a href="https://hostdb.org/hostdb/app">Bos taurus</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/">Homo sapiens</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/">Macaca mulatta</a></i></li>
              <li><i><a href="https://hostdb.org/hostdb/app/">Mus musculus</a></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TaxaPage