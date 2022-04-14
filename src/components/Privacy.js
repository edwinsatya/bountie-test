import TitleForm from "./Form/TitleForm";
import SwitchToggle from "./SwitchToggle";
import Tooltip from "./Tooltip";

const Privacy = () => {
  return (
    <div className="py-6">
      <div className="p-3 lg:p-6">
        <TitleForm title="Standart Privacy Note" />
        <div>
          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugit voluptatum magni! Doloremque eos, quos esse quasi, aliquam
            cupiditate voluptas vero libero, quis molestiae corrupti
            voluptatibus provident? Aliquid cumque architecto veritatis
            similique aliquam incidunt non nulla nihil, hic expedita eius beatae
            eaque optio ullam voluptas odit, rem aspernatur, quam quae ab
            reprehenderit fuga.
          </p>

          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            eius minus voluptatum vero, nam magnam odio esse aspernatur ut
            quibusdam distinctio totam cum veniam quod eum! Neque, praesentium
            temporibus vero, veritatis sint sit nihil porro assumenda, numquam
            illum accusantium dignissimos ex qui ratione totam nobis mollitia
            pariatur? Praesentium dignissimos nam ullam cum.
          </p>

          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            doloribus temporibus culpa id necessitatibus quae sunt unde, vel
            fugit, aut deserunt magni maiores. Vero, dolorem alias laboriosam
            eum aut aspernatur eius ullam fugit quaerat ipsa eos distinctio
            deleniti sint molestias.
          </p>

          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            doloribus temporibus culpa id necessitatibus quae sunt unde, vel
            fugit, aut deserunt magni maiores. Vero, dolorem alias laboriosam
            eum aut aspernatur eius ullam fugit quaerat ipsa eos distinctio
            deleniti sint molestias.
          </p>

          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            doloribus temporibus culpa id necessitatibus quae sunt unde, vel
            fugit, aut deserunt magni maiores. Vero, dolorem alias laboriosam
            eum aut aspernatur eius ullam fugit quaerat ipsa eos distinctio
            deleniti sint molestias.
          </p>

          <p className="mt-3 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad
            unde sed. Nisi, commodi laborum.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex mt-2 items-center">
            <div className="w-40 lg:w-auto">
              <p className="mr-3 text-sm lg:text-base">SMS & Mobile Call</p>
            </div>
            <SwitchToggle />
          </div>

          <div className="flex mt-2 items-center">
            <div className="w-40 lg:w-auto">
              <p className="mr-3 text-sm lg:text-base">Emailing</p>
            </div>
            <SwitchToggle />
          </div>

          <div className="flex mt-2 items-center">
            <div className="w-40 lg:w-auto">
              <p className="mr-3 text-sm lg:text-base">Mailing</p>
            </div>
            <SwitchToggle />
          </div>
        </div>

        <div className="lg:w-3/12">
          <Tooltip title="Subscribe to SMS & Mobile Call. Email & Mailing to receive updates about your membership perks and exclusive promotion!" />
        </div>

        <div className="flex flex-row mt-5">
          <input type="checkbox" className="mt-1" />
          <p className="ml-2 mt-0 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi
            asperiores, dolore voluptatem, molestias quod ipsum fugit non,
            eligendi ipsa adipisci fuga nisi earum beatae vitae doloremque iure
            repellendus ad?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
