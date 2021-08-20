<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailsColumnsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->date('data_nascimento')->nullable();
            $table->string('sexo')->nullable();
            $table->string('email_institucional')->nullable();
            $table->string('telefone')->nullable();
            $table->string('email_pessoal')->nullable();
            $table->string('telefone_alternativo')->nullable();
            $table->string('unidade_finalistica')->nullable();
            $table->string('setor')->nullable();
            $table->string('cargo')->nullable();
            $table->string('situacao_mec')->nullable();
            $table->string('perfil')->nullable();
            $table->string('situacao')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
