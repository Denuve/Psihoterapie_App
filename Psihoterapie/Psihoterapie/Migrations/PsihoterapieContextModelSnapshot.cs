﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Psihoterapie.Models;

namespace Psihoterapie.Migrations
{
    [DbContext(typeof(PsihoterapieContext))]
    partial class PsihoterapieContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Psihoterapie.Models.Article", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<string>("Content");

                    b.Property<DateTime>("Date");

                    b.Property<string>("ImagePath");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Article");
                });
#pragma warning restore 612, 618
        }
    }
}
