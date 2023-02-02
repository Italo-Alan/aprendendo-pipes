import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})

//Extender o FiltroArrayPipe ele herda tudo que está no transforme do Pipe herdado
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {



}
